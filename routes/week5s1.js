const express = require('express')
const router = express.Router()
const week51Controller = require('../controllers/week5s1')

router.get('/', week51Controller.getWeek5)

router.post('/createWeek5', week51Controller.createWeek5)

router.delete('/deleteWeek5', week51Controller.deleteWeek5)

module.exports = router