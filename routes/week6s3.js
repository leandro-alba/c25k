const express = require('express')
const router = express.Router()
const week63Controller = require('../controllers/week6s3')

router.get('/', week63Controller.getWeek6)

router.post('/createWeek6', week63Controller.createWeek6)

router.delete('/deleteWeek6', week63Controller.deleteWeek6)

module.exports = router