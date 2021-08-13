const jwt = require('jsonwebToken')
const adminUser = require('../Schemas/adminUserSchema')
exports.adminAuthCheck = (req, res, next) => {
  const token = res.cookies.adm

  if (!req.cookies.adm) {
    return res.redirect(`${process.env.CLIENT_URL}/admin/login`)
  }

  jwt.verify(token, process.env.ADMIN_TOKEN_SECRET, (error, decoded) => {
    if (error || !decoded) {
      return res.redirect(`${process.env.CLIENT_URL}/admin/login`)
    }

    const id = decoded._id
    adminUser
      .findById(id)
      .then(() => {
        return next()
      })
      .catch(() => {
        return res.redirect(`${process.env.CLIENT_URL}/admin/login`)
      })
  })
}
