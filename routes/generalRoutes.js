const {
  contactController,
  newsLetterController,
} = require('../controllers/generalController')

const router = require('express').Router()

router.post('/contact', contactController)
router.post('/newsLetter', newsLetterController)

module.exports = router
