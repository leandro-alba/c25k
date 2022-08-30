const express = require('express')
const router = express.Router()
const week61Controller = require('../controllers/week6s1')

router.get('/', week61Controller.getWeek6)

router.post('/createWeek6', week61Controller.createWeek6)

router.delete('/deleteWeek6', week61Controller.deleteWeek6)

module.exports = router