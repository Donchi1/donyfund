const {
  notificationGetter,
  notificationDelete,
} = require('../controllers/notificationController')
const accessTokenCheck = require('../authentification/tokenCheck')

const router = require('express').Router()

router.get('/info', accessTokenCheck, notificationGetter)
router.delete('/delete/:id', accessTokenCheck, notificationDelete)

module.exports = router
