const router = require('express').Router()

const {
  withdrawalController,
  paymentDataController,
  paymentProveController,
} = require('../controllers/transactions')
const accessTokenCheck = require('../authentification/tokenCheck')
const { uploadProve } = require('../helpers/muterFile')

router.post('/withdrawals', accessTokenCheck, withdrawalController)
router.post(
  '/paymentprove',
  uploadProve,
  accessTokenCheck,
  paymentProveController,
)
router.post('/payments', accessTokenCheck, paymentDataController)

module.exports = router
