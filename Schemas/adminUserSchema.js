const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    trim: true,
  },
  hashed_password: {
    type: String,
    required: true,
    minLength: 5,
  },
})

const adminUser = mongoose.model('AdminUser', adminSchema)
module.exports = adminUser
