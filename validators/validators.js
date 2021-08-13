const Joi = require('joi')

exports.registerValidate = Joi.object({
  username: Joi.string()
    .required()
    .min(3)
    .max(20)
    .trim()
    .disallow(Joi.ref('email'))
    .label('username must not be equal to email'),
  email: Joi.string().email().required(),
  fullname: Joi.string().required(),
  occupation: Joi.string().required().min(3).max(15),
  country: Joi.string().required().min(3).max(15),
  password: Joi.string().alphanum().required().max(30).min(5).strict().trim(),
  gender: Joi.string().required(),
})

exports.loginValidate = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().alphanum().required().max(30).min(5).strict().trim(),
})
exports.passResetValidate = Joi.object({
  email: Joi.string().email().required().trim(),
})
exports.passUpdateValidate = Joi.object({
  newPassword: Joi.string()
    .alphanum()
    .required()
    .max(30)
    .min(5)
    .strict()
    .trim(),
  repeatPassword: Joi.string()
    .required()
    .valid(Joi.ref('newPassword'))
    .label('password must match'),
})

exports.profileUpdateValidate = Joi.object({
  newPassword: Joi.string().alphanum().max(30).min(5).strict().trim(),
  confirmPassword: Joi.string()
    .valid(Joi.ref('newPassword'))
    .label('password must match'),
  password: Joi.string().min(5).max(30).trim(),
  email: Joi.string().email().trim(),
  occupation: Joi.string().min(3).max(15),
  country: Joi.string().min(3).max(15),
  username: Joi.string()
    .min(3)
    .max(20)
    .trim()
    .disallow(Joi.ref('email'))
    .label('username must not be equal to email'),
  coverLater: Joi.string().min(10).max(400),
  skill: Joi.string(),
  photo: Joi.string(),
})

exports.cardDataValidate = Joi.object({
  email: Joi.string().email().required().trim(),
  name: Joi.string().required(),
  phone: Joi.string().required().min(10).max(13),
  country: Joi.string().required(),
  zipcode: Joi.number().required().min(2).max(15),
  street: Joi.string().required(),
  town: Joi.string().required(),
  state: Joi.string().required(),
  cardHolderName: Joi.string().required(),
  cardNumber: Joi.string().creditCard().required(),
  expMonth: Joi.string().required(),
  expYear: Joi.string().required(),
  cvv: Joi.number().required().min(3).max(3),
})

exports.withdrawalValidator = Joi.object({
  amount: Joi.number().required().max(1000).min(100),
  type: Joi.string().required().trim(),
  email: Joi.string().email().trim(),
  wallet: Joi.string().alphanum().min(30).max(36),
})

exports.contactValidator = Joi.object({
  email: Joi.string().email().required().trim(),
  name: Joi.string().required(),
  file: Joi.string().optional(),
  message: Joi.string().required(),
  company: Joi.string().optional(),
  phone: Joi.string().required(),
})
exports.newsLetterValidator = Joi.object({
  email: Joi.string().email().required().trim(),
})

exports.adminUserValidator = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().max(30).min(5).invalid({ value: '12345' }),
})
