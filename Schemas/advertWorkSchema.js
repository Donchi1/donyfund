const mongoose = require('mongoose')

const AdvertSchema = new mongoose.Schema(
  {
    email: String,
    description: String,
    workerName: String,
    price: Number,
    productName: String,
    location: String,
    imgUrl: String,
    category: String,
  },
  { timeStamp: true },
)

const advertSchema = mongoose.model('AdvertJobs', AdvertSchema)

module.exports = advertSchema
