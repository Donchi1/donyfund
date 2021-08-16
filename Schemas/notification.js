const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
  {
    creatorname: String,
    message: String,
    email: String,
    type: String,
    status: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
)

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification
