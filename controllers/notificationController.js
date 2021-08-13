const jwt = require('jsonwebtoken')
const Notification = require('../Schemas/notification')

exports.notificationGetter = (req, res) => {
  const { token } = req.user

  if (!token) {
    return res.status(400).json('No access Token Found')
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(402).json('expired Token')
    }

    const { email } = decoded

    Notification.find({ email })
      .then((notes) => {
        return res.json(notes)
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message })
      })
  })
}

exports.notificationDelete = (req, res) => {
  const { id } = req.params
  const { token } = req.user

  if (!token) {
    return res.status(400).json('No access Token Found')
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err || !decoded) {
      return res.status(402).json('expired Token')
    }

    Notification.findByIdAndDelete(id, (err, allNotes) => {
      if (err || !allNotes) {
        return res.status(400).json({ message: 'No notification found' })
      }
      const notes = allNotes.filter((each) => each._id !== id)
      return res.json({ notes })
    })
  })
}
