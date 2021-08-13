const mongoose = require('mongoose')



const advertDataSchema = new mongoose.Schema({
  carAdvert: {
  name: String,
  location: String,
  imgUrl: String,
  price: Number,
  description: String,
},
  phoneAdvert: {
  name: String,
  location: String,
  imgUrl: String,
  price: Number,
  description: String,
},
  ecomAdvert: {
  name: String,
  location: String,
  imgUrl: String,
  price: Number,
  description: String,
},
})

const advertDataModel = mongoose.model('UserAdvertDatas', advertDataSchema)

module.exports = advertDataModel
