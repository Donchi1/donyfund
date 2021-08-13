const mongoose = require('mongoose')

const schema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 30,
  },
})

const adminUser = mongoose.model('AdminUser', schema)
module.exports = adminUser
