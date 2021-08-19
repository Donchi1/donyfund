require('dotenv').config({
  path: 'config/config.env',
})
const express = require('express')
const cors = require('cors')
const session = require('express-session')

const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const path = require('path')

const authRoutes = require('./routes/authRoutes')
const notificationRoutes = require('./routes/notificationRoutes')
const workRoutes = require('./routes/workRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const generalRoutes = require('./routes/generalRoutes')
const adminRoute = require('./routes/adminRoute')

const database = require('./database/db')

const app = express()
app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(
  session({
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: {
      secure: true,
      sameSite: 'strict',
      httpOnly: true,
    },
  }),
)

const port = process.env.PORT || 5000

//database()

app.use('/admin', adminRoute)
app.use('/auth', authRoutes)
app.use('/api/notification', notificationRoutes)
app.use('/api/work', workRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/general', generalRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname + '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
}
app.listen(port, () => {
  console.log(`server is running on port ${port} `)
})
