const jwt = require('jsonwebtoken')
const User = require('../Schemas/registerSchema')

const accessTokenCheck = (req, res, next) => {
  //const headerToken = req.headers['authorization']

  //const boken = headerToken && headerToken.split(' ')[1]
  const token = req.cookies.token

  if (!token) {
    return res.status(400).json({ message: 'No access token found try login' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'expired token' })
    }

    User.findOne({ _id: decoded.id }, (error, user) => {
      if (error || !data) {
        return res
          .status(422)
          .json({ message: 'Bad Auth Try Login Or Register' })
      }
      req.user = user
      return next()
    })
  })
}

module.exports = accessTokenCheck
