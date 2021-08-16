const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const adminUser = require('../Schemas/adminUserSchema')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  rootPath: '/admin',
  databases: [mongoose],
  branding: {
    companyName: 'Donyfund ltd',
    softwareBrothers: false,
  },
  versionSettings: {
    admin: false,
  },
})

const router = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  {
    authenticate: async (email, password) => {
      if (!email || !password) {
        return null
      }
      const ADMIN = await adminUser.findOne({ email })

      if (!ADMIN) {
        return null
      }
      const passInfo = await bcrypt.compare(password, ADMIN.hashed_password)
      if (passInfo) {
        return ADMIN
      }

      return null
    },

    cookieName: process.env.COOKIE_NAME,
    cookiePassword: process.env.COOKIE_PASSWORD,
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
  },
)

module.exports = router
