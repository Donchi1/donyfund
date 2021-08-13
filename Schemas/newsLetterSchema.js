const mongoose = require('mongoose')

const newsLetterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
})

const newsletter = mongoose.model('NewsLetter', newsLetterSchema)

module.exports = newsletter
