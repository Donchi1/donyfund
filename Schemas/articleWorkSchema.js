const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    file: {
      type: String,
    },

    workerName: {
      type: String,
    },

    price: {
      type: Number,
    },
    topic: {
      type: String,
    },
  },
  { timeStamp: true },
)

const articleSchema = mongoose.model('ArticleJobs', ArticleSchema)

module.exports = articleSchema
