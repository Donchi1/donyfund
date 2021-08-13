const workNotification = require('../Schemas/workInformationSchema')

exports.workNotificationRunner = (user, data, categ) => {
  const notification = new workNotification({
    message: data.message,
    type: data.type,
    email: user.email,
    topic: data.topic,
    status: 'success',
    category: categ,
    price: 20,
    creatorName: user.name,
  })
  return notification.save()
}
