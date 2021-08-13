const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')

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

const router = AdminBroExpress.buildRouter(adminBro)

module.exports = router
