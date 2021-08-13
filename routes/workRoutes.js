const {
  articleWorkController,
  advertWorkController,
  blogWorkController,
  workNotificationDeleteController,
  workNotificationController,
  workInformationController,
  advertDataGetter,
} = require('../controllers/workControllers')
const accessTokenCheck = require('../authentification/tokenCheck')

const router = require('express').Router()

router.post('/add/blog', accessTokenCheck, blogWorkController)
router.post('/add/advert', accessTokenCheck, advertWorkController)
router.post('/add/article', accessTokenCheck, articleWorkController)

router.delete('/delete/:id', accessTokenCheck, workNotificationDeleteController)
router.get('/get', accessTokenCheck, workNotificationController)
router.get('/info', accessTokenCheck, workInformationController)
router.get('/worklist', accessTokenCheck, advertDataGetter)

module.exports = router
