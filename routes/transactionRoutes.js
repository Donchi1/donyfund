const router = require('express').Router()

const {
  withdrawalController,
  paymentDataController,
  paymentProveController,
} = require('../controllers/transactions')
const accessTokenCheck = require('../authentification/tokenCheck')

router.post('/withdrawals', accessTokenCheck, withdrawalController)
router.post('/paymentprove', accessTokenCheck, paymentProveController)
router.post('/payments', accessTokenCheck, paymentDataController)

module.exports = router
