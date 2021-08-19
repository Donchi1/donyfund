const contact = require('../Schemas/contactSchema')
const newsletter = require('../Schemas/newsLetterSchema')
const emailData = require('../userVitualize/EmailData')
const transporter = require('../userVitualize/tranporter')
const {
  contactValidator,
  newsLetterValidator,
} = require('../validators/validators')

exports.contactController = (req, res) => {
  const { error, value } = contactValidator.validate(req.body)

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  const contacts = new contact({
    email: value.email,
    phone: value.phone,
    message: value.message,
    company: value.company,
    file: value.file,
  })

  contacts.save((err, val) => {
    if (err || !val) {
      return res.status(422).json({ message: err.message })
    }
    return transporter.sendMail(emailData.contacts(value), (error, success) => {
      if (error) {
        return res.status(422).json({ message: 'an errror occured' })
      }
      return res.json('Thank you for contacting us')
    })
  })
}
exports.newsLetterController = (req, res) => {
  const { userData } = req.body
  const { error, value } = newsLetterValidator.validate(userData)

  if (error || !value) {
    return res.status(422).json({ message: error.message })
  }

  const newsLetters = new newsletter({
    email: value.email,
  })

  newsLetters.save((err, val) => {
    if (err || !val) {
      return res.status(422).json({ message: err.message })
    }
    return transporter.sendMail(
      emailData.newsLetters(value),
      (error, success) => {
        if (error) {
          return res.status(422).json({ message: 'an errror occured' })
        }
        return res.json('Thank you for subscribing to our newsletter')
      },
    )
  })
}
