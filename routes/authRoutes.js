const express = require('express')
const router = express.Router()
const {
  registerController,
  loginController,
  passwordUpdateController,
  passwordResetController,
  activateController,
  googleLoginController,
  updateProfileController,
  profileInfoController,
  logoutController,
} = require('../controllers/authControllers')
const accessTokenCheck = require('../authentification/tokenCheck')

router.post('/register', registerController)
router.post('/login', loginController)
router.put('/update', passwordUpdateController)
router.post('/reset', passwordResetController)
router.post('/activate', activateController)
router.post('/googleLogin', googleLoginController)
router.post('/update/profile', accessTokenCheck, updateProfileController)
router.get('/profile/info', accessTokenCheck, profileInfoController)
router.delete('/logout', logoutController)

module.exports = router
