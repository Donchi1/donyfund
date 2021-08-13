const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
      trim: true,
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
    skill: String,
    aboutUser: String,
    profilePic: String,
    failedJobs: Number,
    activationLink: '',
    accesstoken: '',
  },
  { timeStamp: true },
)

userSchema
  .virtual('password')
  .set(async function (password) {
    this.password = password
    this.hashed_password = await bcrypt.hash(password, 10)
  })
  .get(function () {
    return this.hashed_password
  })

const User = mongoose.model('User', userSchema)

module.exports = User
