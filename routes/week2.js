const express = require('express')
const router = express.Router()
const week2Controller = require('../controllers/week2')

router.get('/', week2Controller.getWeek2)

router.post('/createWeek2', week2Controller.createWeek2)

router.delete('/deleteWeek2', week2Controller.deleteWeek2)

module.exports = router