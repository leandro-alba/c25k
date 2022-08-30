const express = require('express')
const router = express.Router()
const week53Controller = require('../controllers/week5s3')

router.get('/', week53Controller.getWeek5)

router.post('/createWeek5', week53Controller.createWeek5)

router.delete('/deleteWeek5', week53Controller.deleteWeek5)

module.exports = router