const {
  registerValidate,
  loginValidate,
  passResetValidate,
  passUpdateValidate,
  profileUpdateValidate,
} = require('../validators/validators')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../Schemas/registerSchema')
const { OAuth2Client } = require('google-auth-library')
const transporter = require('../userVitualize/tranporter')
const emailData = require('../userVitualize/EmailData')
const notificationRunner = require('../userVitualize/notification')
const { fileFormate } = require('../helpers/muterFile')

exports.registerController = (req, res) => {
  const {
    email,
    fullname,
    password,
    username,
    occupation,
    country,
    gender,
  } = req.body
  const { error } = registerValidate.validate({
    email,
    fullname,
    password,
    username,
    occupation,
    country,
    gender,
  })
  if (error) {
    return res.status(422).json({ message: error.message })
  }

  User.findOne({ email }).exec((error, user) => {
    if (user) {
      return res.status(401).json({ message: 'User already exist' })
    }
    const accessToken = jwt.sign(
      { fullname, email, password, country, occupation, gender, username },
      process.env.JWT_SECRET,
      {
        expiresIn: '15m',
      },
    )
    transporter.sendMail(
      emailData.activation(email, accessToken),
      (error, info) => {
        if (error || !info) {
          return res.status(400).json({
            message: 'Error: please check your network and try again ',
          })
        }
        return res.json(
          `An account activation email has been sent to ${email}, activate within 15mins`,
        )
      },
    )
  })
}
exports.loginController = (req, res) => {
  const { email, password } = req.body
  const { error, value } = loginValidate.validate({ email, password })

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  User.findOne({ email }).exec((error, user) => {
    if (error || !user) {
      return res.status(404).json({ message: 'No user found try register' })
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    )

    bcrypt
      .compare(password, user.hashed_password)
      .then((info) => {
        if (info) {
          const notifyInfo = {
            message: 'Welcome to donyfund a platform for your easy work',
            type: 'Welcome',
            status: 'success',
          }

          res.cookie('token', accessToken, {
            httpOnly: true,
            sameSite: 'strict',
            secured: true,
          })

          res.json({
            message: 'login successful',
            loginStatus: true,
          })
          return notificationRunner(user, notifyInfo)
        } else {
          return res.status(401).json({
            message: 'Incorrect password: check the password and retry',
          })
        }
      })
      .catch((error) => {
        res.status(403).json({ message: error.message })
      })
  })
}
exports.activateController = (req, res) => {
  const { token } = req.body
  if (!token) {
    return res.status(404).json({ message: 'no access token found' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(402)
        .json({ message: 'Expired token please sign up again' })
    }
    const {
      fullname,
      username,
      password,
      email,
      gender,
      country,
      occupation,
    } = decoded

    const user = new User({
      fullname,
      username,
      email,
      gender,
      country,
      occupation,
      hashed_password: bcrypt.hashSync(password, 10),
    })

    user
      .save()
      .then((data) => {
        transporter.sendMail(emailData.welcome(data), (error, success) => {
          if (error || !success) {
            User.findOneAndDelete({ email }).then(() => {
              return res.status(422).json({
                message: 'Error: please check your network and try again',
              })
            })
          }
          return res.json(
            ' Your Email Activation Was Successful Login Now To Start Working',
          )
        })
      })
      .catch(() => {
        res
          .status(401)
          .json({ message: 'Error while activating user. Please try again' })
      })
  })
}

exports.passwordResetController = (req, res) => {
  const { email } = req.body

  const { error, value } = passResetValidate.validate({ email })

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ message: 'User with this email does not exist' })
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_RESET, {
      exp: '10m',
    })

    transporter
      .sendMail(emailData.passwordResetLink(user, token))
      .then(() => {
        return res.json(
          `A password reset email has been sent to ${email} expires in 10m`,
        )
      })
      .catch((err) => {
        return res.status(422).json({ message: err.message })
      })
  })
}

exports.passwordUpdateController = (req, res) => {
  const { newPassword, repeatPassword, token } = req.body

  const { error, value } = passUpdateValidate.validate({
    newPassword,
    repeatPassword,
  })

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  jwt.verify(token, process.env.JWT_RESET, (error, decoded) => {
    if (error || !decoded) {
      return res.status(403).json({ message: 'Invalid or expired token' })
    }
    const hashed_password = bcrypt.hashSync(newPassword, 10)
    User.findOneAndUpdate(
      { _id: decoded.id },
      { hashed_password },
      (error, user) => {
        if (error) {
          return res.status(422).json({ message: error.message })
        }
        transporter
          .sendMail(emailData.passwordResetSuccess(user.email))
          .then(() => {
            const notifyInfo = {
              message: 'Your password reset was successful',
              type: 'Password Reset',
              status: 'success',
            }

            notificationRunner(user, notifyInfo)

            return res.json('Wow! Your password reset was a success.')
          })
          .catch(() => {
            const notifyInfo = {
              message: 'Your password reset was unsuccessful',
              type: 'Password Reset Error',
              status: 'error',
            }

            notificationRunner(user, notifyInfo)
            return res
              .status(422)
              .json({ message: 'Error: check your network and try again' })
          })
      },
    )
  })
}
const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT)
exports.googleLoginController = (req, res) => {
  const { tokenId } = req.body
  client
    .verifyIdToken({ tokenId, audience: process.env.GOOGLE_AUTH_CLIENT })
    .then((response) => {
      const {
        email_verified,
        email,
        name,
        picture,
        username,
        gender,
        country,
      } = response.payload

      if (email_verified) {
        User.findOne({ email }).then((userData) => {
          if (userData) {
            const token = jwt.sign(
              { id: userData._id },
              process.env.JWT_SECRET,
              {
                expiresIn: '7d',
              },
            )
            res.cookie('token', token, {
              httpOnly: true,
              secure: true,
              sameSite: 'strict',
            })
            transporter.sendMail(
              emailData.welcome(userData),
              (err, success) => {
                if (err || !success) {
                  return res.status(403).json({ message: err.message })
                }
                const notifyInfo = {
                  message: 'Welcome to donyfund a platform for your easy work',
                  type: 'Welcome',
                  status: 'info',
                }

                notificationRunner(user, notifyInfo)

                return res.json({ message: 'login success', loginStatus: true })
              },
            )
          } else {
            const password = name + process.env.JWT_SECRET
            const user = new User({
              fullname: name,
              hashed_password: password,
              email,
              gender: gender || 'male',
              country: country || 'Us',
              occupation: 'freelencer',
              profilePic: picture,
              username: username || 'John Doe',
            })
            user.save((err, user) => {
              if (err) {
                return res.status(422).json({ message: err.message })
              }
              const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '7d',
              })
              res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
              })

              const notifyInfo = {
                message: 'Welcome to donyfund a platform for your easy work',
                type: 'Welcome',
                status: 'info',
              }

              notificationRunner(user, notifyInfo)

              return res.json({ message: 'login success', loginStatus: true })
            })
          }
        })
      } else {
        res.status(400).json('Google login failed login again')
      }
    })
    .catch((err) => {
      return res.json({ message: err.message })
    })
}

exports.updateProfileController = (req, res) => {
  const {
    email,
    password,
    newPassword,
    confirmPassword,
    skills,
    coverLater,
    country,
    photo,
  } = req.body

  let { error, value } = profileUpdateValidate({
    email,
    password,
    newPassword,
    confirmPassword,
    skills,
    coverLater,
    country,
    photo,
  })

  if (error || !value) {
    return res.status(403).json({ message: error.message })
  }

  const photoInfo = {
    picName: req.file.originalname,
    picPath: req.file.path,
    picType: req.file.mimetype,
    picSize: fileFormate(req.file.size, 2),
  }

  User.findOneAndUpdate(
    { email },
    {
      email,
      password: newPassword,
      skills,
      coverLater,
      country,
      profilePic: photoInfo,
    },
    { new: true },
    (err, newUser) => {
      if (err) {
        return res.status(400).json({ message: err.message })
      }

      transporter.sendMail(emailData.profileUpdate(newUser), (err, success) => {
        if (err || !success) {
          return res.status(403).json({ message: err.message })
        }
        const notifyInfo = {
          message: 'Your profile has been successfully updated',
          type: 'profileUpdate',
          status: 'success',
        }

        notificationRunner(newUser, notifyInfo)
      })

      return res.json({
        user: newUser,
        message: 'profile update was successful',
      })
    },
  )
}
exports.profileInfoController = (req, res) => {
  const { email } = req.user

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: err.message })
    }

    return res.json({ user })
  })
}

exports.logoutController = (req, res) => {
  res.clearCookie('token')
  return res.json({ message: 'logout success' })
}
