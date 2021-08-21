const Notification = require('../Schemas/notification')

exports.notificationGetter = (req, res) => {
  const { email } = req.user

  Notification.find({ email })
    .limit(10)
    .sort({ createdAt: -1 })
    .then((notes) => {
      return res.json(notes)
    })
    .catch((error) => {
      return res.status(400).json({ message: error.message })
    })
}

exports.notificationDelete = (req, res) => {
  const { id } = req.params

  Notification.findByIdAndDelete(id, (err, allNotes) => {
    if (err || !allNotes) {
      return res.status(400).json({ message: 'No notification found' })
    }
    const notes = allNotes.filter((each) => each._id !== id)
    return res.json({ notes })
  })
}
