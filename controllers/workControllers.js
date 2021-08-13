const advertSchema = require('../Schemas/advertWorkSchema')
const articleSchema = require('../Schemas/articleWorkSchema')
const blogSchema = require('../Schemas/blogWorkSchema')
const advertDataModel = require('../Schemas/tempWorkSchema')
const workNotification = require('../Schemas/workInformationSchema')
const { workNotificationRunner } = require('../userVitualize/workData')

exports.workNotificationDeleteController = (req, res) => {
  const id = req.params.id
  workNotification
    .findByIdAndDelete(id)
    .then((workNotes) => {
      const articleNotes = workNotes.filter(
        (notes) => notes.category === 'article',
      )
      const blogNotes = workNotes.filter((notes) => notes.category === 'blog')
      const advertNotes = workNotes.filter(
        (notes) => notes.category === 'advert',
      )

      return res.json({ articleNotes, blogNotes, advertNotes })
    })
    .catch((err) => {
      return res.status(422).json({ message: err.message })
    })
}
exports.workNotificationController = (req, res) => {
  const { email } = req.user

  workNotification.find({ email }).exec((err, workNotes) => {
    if (err || !workNotes) {
      return res.status(404).json({ message: 'sorry no information found' })
    }
    const articleNotes = workNotes.filter(
      (notes) => notes.category === 'article',
    )
    const blogNotes = workNotes.filter((notes) => notes.category === 'blog')
    const advertNotes = workNotes.filter((notes) => notes.category === 'advert')

    return res.json({ articleNotes, blogNotes, advertNotes })
  })
}
exports.workInformationController = async (req, res) => {
  const { email } = req.user

  const adverts = await advertSchema.find({ email })
  const articles = await articleSchema.find({ email })
  const blogs = await blogSchema.find({ email })

  const advertLength = adverts.length
  const articleLength = articles.length
  const blogLength = blogs.length

  const totalAdvert = adverts.reduce((sum, { price }) => sum + price)
  const totalArticle = articles.reduce((sum, { price }) => sum + price)
  const totalBlog = blogs.reduce((sum, { price }) => sum + price)

  const totalWorkPrice = totalAdvert + totalArticle + totalBlog
  const totalWorks = advertLength + articleLength + blogLength
  const jobsInfo = await workNotification.find()

  const successJobs = jobsInfo.filter((jobs) => jobs.status === 'success')
    .length
  const errorJobs = jobsInfo.filter((jobs) => jobs.status === 'error').length

  return res.send({ totalWorks, totalWorkPrice, successJobs, errorJobs })
}
exports.articleWorkController = (req, res) => {
  const { email, fullname } = req.user
  const { work, file, topic } = req.body

  const article = new articleSchema({
    workerName: fullname,
    email,
    work,
    file,
    topic,
    price: 20,
  })
  article
    .save()
    .then(() => {
      workNotificationRunner(req.user, req.body, 'article')
      return res.json(
        'Article work successfully submited. Wait for less than 24hours to recieve your fund',
      )
    })
    .catch((err) => {
      return res.status(422).json({ message: err.message })
    })
}
exports.advertWorkController = (req, res) => {
  const { email, fullname } = req.user
  const { price, type, category, location } = req.body

  const advertWork = new advertSchema({
    email,
    workerName: fullname,
    price,
    type,
    category,
    location,
  })

  advertWork
    .save()
    .then(() => {
      workNotificationRunner(req.user, req.body, 'advert')
      return res.json('Work successfully completed')
    })
    .catch((err) => {
      return res.status(422).json({ message: err.message })
    })
}

exports.blogWorkController = (req, res) => {
  const { email, name } = req.user
  const { work, file, topic } = req.body

  const blog = new blogSchema({
    workerName: name,
    email,
    work,
    file,
    topic,
    price: 20,
  })
  blog
    .save()
    .then(() => {
      workNotificationRunner(req.user, req.body, 'blog')
      return res.json(
        'blog work successfully submited. Wait for less than 24hours to recieve your fund',
      )
    })
    .catch((err) => {
      return res.status(422).json({ message: err.message })
    })
}

exports.advertDataGetter = (req, res) => {
  const { slug } = req.params

  if (slug === 'carsales') {
    advertDataModel.carAdvert
      .find()
      .then((data) => {
        res.json({ data })
      })
      .catch((error) => {
        res.status(404).json({ message: error.message })
      })
  }
  if (slug === 'ecommerce') {
    advertDataModel.ecomAdvert
      .find()
      .then((data) => {
        res.json({ data })
      })
      .catch((error) => {
        res.status(404).json({ message: error.message })
      })
  }
  if (slug === 'accessories') {
    advertDataModel.phoneAdvert
      .find()
      .then((data) => {
        res.json({ data })
      })
      .catch((error) => {
        res.status(404).json({ message: error.message })
      })
  }
}
