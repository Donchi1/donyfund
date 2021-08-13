const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema(
  {
    email: String,

    file: String,

    work: String,

    workerName: String,

    price: Number,

    topic: String,
  },
  { timeStamp: true },
)

const blogSchema = mongoose.model('BlogJobs', BlogSchema)

module.exports = blogSchema
