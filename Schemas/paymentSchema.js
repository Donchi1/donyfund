const mongoose = require('mongoose')

const cardPaymentSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  country: String,
  zipcode: Number,
  street: String,
  town: String,
  state: String,
  cardHolderName: String,
  cardNumber: Number,
  expMonth: String,
  expYear: String,
  cvv: Number,
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

const cardData = mongoose.model('CardPayment', cardPaymentSchema)

module.exports = cardData
