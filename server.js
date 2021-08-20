require('dotenv').config({
  path: 'config/config.env',
})
const express = require('express')
const cors = require('cors')

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
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
)
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
)
app.use(cookieParser())
app.use(express.json())

const port = process.env.PORT || 5000

database()
app.use('/admin', adminRoute)
app.use('/auth', authRoutes)
app.use('/api/notification', notificationRoutes)
app.use('/api/work', workRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/general', generalRoutes)

if (process.env.NODE_ENV === 'production') {
  // let defaultSrc = "default-src 'none'"
  // let formSrc = "form-action 'self'"
  // let scriptSrc = "script-src 'self'"
  // scriptSrc += 'https://themezhub.net'
  // let csp = [defaultSrc, formSrc, scriptSrc].join(';')
  //app.use(expressCspHeader())

  app.use(express.static(path.resolve(__dirname, './client/build')))
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
}
app.listen(port, () => {
  console.log(`server is running on port ${port} `)
})
