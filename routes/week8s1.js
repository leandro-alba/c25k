const express = require('express')
const router = express.Router()
const week81Controller = require('../controllers/week8s1')

router.get('/', week81Controller.getWeek8)

router.post('/createWeek8', week81Controller.createWeek8)

router.delete('/deleteWeek8', week81Controller.deleteWeek8)

module.exports = router