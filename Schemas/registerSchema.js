const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
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
      trim: true,
      lowercase: true,
      requied: true,
    },
    profilePic: {
      picName: String,
      picPath: String,
      picType: String,
      picSize: String,
    },
    skill: String,
    aboutUser: String,
    failedJobs: Number,
    activationLink: '',
    accesstoken: '',
  },
  { timeStamp: true },
)

const User = mongoose.model('User', userSchema)

module.exports = User
