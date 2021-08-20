const notification = require('../Schemas/notification')

const notificationRunner = (user, data) => {
  const realNote = new notification({
    creatorname: user.fullname,
    message: data.message,
    type: data.type,
    email: user.email,
    status: data.status,
    id: user.id,
  })
  return realNote.save()
}

module.exports = notificationRunner
