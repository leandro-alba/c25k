const express = require('express')
const router = express.Router()
const week83Controller = require('../controllers/week8s3')

router.get('/', week83Controller.getWeek8)

router.post('/createWeek8', week83Controller.createWeek8)

router.delete('/deleteWeek8', week83Controller.deleteWeek8)

module.exports = router