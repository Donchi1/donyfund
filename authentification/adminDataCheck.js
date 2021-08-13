const bcrypt = require('bcrypt')
const adminUser = require('../Schemas/adminUserSchema')
const jwt = require('jsonwebtoken')
const { adminUserValidator } = require('../validators/validators')

exports.adminDataCheck = (req, res, next) => {
  const { error, value } = adminUserValidator(req.body)
  if (error || !value) {
    res.redirect(`${process.env.CLIENT_URL}/admin/login`)
    return res.status(422).json({ message: error.message })
  }
  const { email, password } = value
  adminUser
    .findOne({ email })
    .then((user) => {
      bcrypt.compare(password, user.password, (err, info) => {
        if (info || !err) {
          const token = jwt.sign(user._id, process.env.ADMIN_TOKEN_SECRET, {
            expiresIn: '1d',
          })

          res.cookie('adm', token, {
            //sameSite: "strict",
            httpOnly: true,
            //secured: true
          })
          return next()
        }
        return res.status(403).json('Invalid cridencials')
      })
    })
    .catch(() => {
      return res.status(404).json('Please input the right cridentials')
    })
}
