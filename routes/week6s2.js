const express = require('express')
const router = express.Router()
const week62Controller = require('../controllers/week6s2')

router.get('/', week62Controller.getWeek6)

router.post('/createWeek6', week62Controller.createWeek6)

router.delete('/deleteWeek6', week62Controller.deleteWeek6)

module.exports = router