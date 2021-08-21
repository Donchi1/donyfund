const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },

    message: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },

    company: String,
  },
  { timestamp: true },
)

const contact = mongoose.model('Contacts', contactSchema)

module.exports = contact
