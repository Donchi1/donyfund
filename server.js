require('dotenv').config({
  path: 'config/config.env',
})
const express = require('express')
const cors = require('cors')
//const csurf = require('csurf')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/authRoutes')
const notificationRoutes = require('./routes/notificationRoutes')
const workRoutes = require('./routes/workRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const generalRoutes = require('./routes/generalRoutes')
const adminRoute = require('./routes/adminRoute')
const { adminAuthCheck } = require('./authentification/adminAuthCheck')
const { adminDataCheck } = require('./authentification/adminDataCheck')

const database = require('./database/db')

const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

const port = process.env.PORT || 5000

//database()
app.use('/admin', adminAuthCheck, adminRoute)
app.use('/admin/dashboard', adminDataCheck, adminRoute)

app.use('/auth', authRoutes)
app.use('/api/notification', notificationRoutes)
app.use('/api/work', workRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/general', generalRoutes)

app.listen(port, () => {
  console.log(`server is running on port ${port} `)
})
