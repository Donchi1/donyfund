const mongoose = require('mongoose')

const paymentProve = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  email: {
    type: String,
    required: true,
  },
  proveImg: {
    picName: { type: String, required: true },
    picType: { type: String, required: true },
    picPath: { type: String, required: true },
    picSize: { type: String, required: true },
  },
})

const prove = mongoose.model('PaymentProves', paymentProve)

module.exports = prove
