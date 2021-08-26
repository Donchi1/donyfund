const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
    },

    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      lowercase: true,
    },
    gender: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    occupation: {
      type: String,
      lowercase: true,
      required: true,
    },
    profilePic: {
      picName: String,
      picPath: String,
      picType: String,
      picSize: String,
    },
    skill: String,
    aboutUser: String,
  },
  { timeStamp: true },
)

const User = mongoose.model('User', userSchema)

module.exports = User
