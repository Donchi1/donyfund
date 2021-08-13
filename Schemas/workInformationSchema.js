const mongoose = require('mongoose')

const WorkNotificationSchema = new mongoose.Schema(
  {
    creatorName: {
      type: String,
    },
    message: {
      type: String,
    },
    email: {
      type: String,
    },
    price: {
      type: Number,
    },
    type: {
      type: String,
    },
    category: String,
    status: {
      type: String,
    },
  },
  { timestamps: true },
)

const workNotification = mongoose.model(
  'WorkNotification',
  WorkNotificationSchema,
)

module.exports = workNotification
