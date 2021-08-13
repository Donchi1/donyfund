const mongoose = require('mongoose')

const paymentProve = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  email: {
    type: String,
    required: true,
  },
  proveImg: {
    data: Buffer,
    type: String,
  },
})

const prove = mongoose.model('PaymentProves', paymentProve)

module.exports = prove
