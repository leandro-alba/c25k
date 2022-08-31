const express = require('express')
const router = express.Router()
const week73Controller = require('../controllers/week7s3')

router.get('/', week73Controller.getWeek7)

router.post('/createWeek7', week73Controller.createWeek7)

router.delete('/deleteWeek7', week73Controller.deleteWeek7)

module.exports = router