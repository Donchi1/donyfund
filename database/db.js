const mongoose = require('mongoose')
const database = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () =>
    console.log('successfully connected to mongodb database'),
  )
}

module.exports = database
