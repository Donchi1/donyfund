const mongoose = require('mongoose')

const withdrawalSchema = mongoose.Schema({
  email: String,
  wallet: String,

  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  amount: {
    type: Number,
    required: true,
  },
  withdrawType: {
    type: String,
    required: true,
  },
})

const withdrawalData = mongoose.model('Withdrawals', withdrawalSchema)

module.exports = withdrawalData
