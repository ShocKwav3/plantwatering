import express from 'express'
const router = express.Router()


router.use('/', require('./homeController'))
router.use('/masterdevice', require('./masterdevice'))

module.exports = router
