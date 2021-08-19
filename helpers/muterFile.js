const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: './client/public',
  filename: (req, file, cb) => {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
  },
})

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpg', 'image/png', 'image/jpeg']

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cd(null, false)
  }
}

exports.fileFormate = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes'
  }

  const dci = decimal || 2
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB']
  const index = Math.floor(Math.log(bytes) / Math.log(1000))
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dci)) +
    ' ' +
    sizes[index]
  )
}

const upload = multer({ storage, fileFilter }).single('photo')
const uploadProve = multer({ storage, fileFilter }).single('proves')

module.exports = { upload, uploadProve }
