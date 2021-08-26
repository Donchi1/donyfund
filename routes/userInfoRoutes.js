const {
  notificationGetter,
  notificationDelete,
  profileInfoController,
} = require('../controllers/notificationController')
const accessTokenCheck = require('../authentification/tokenCheck')

const router = require('express').Router()

router.get('/notification/info', accessTokenCheck, notificationGetter)
router.delete('/notification/delete/:id', accessTokenCheck, notificationDelete)
router.get('/profile/info', accessTokenCheck, profileInfoController)

module.exports = router
