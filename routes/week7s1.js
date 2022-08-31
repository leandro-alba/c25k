const express = require('express')
const router = express.Router()
const week71Controller = require('../controllers/week7s1')

router.get('/', week71Controller.getWeek7)

router.post('/createWeek7', week71Controller.createWeek7)

router.delete('/deleteWeek7', week71Controller.deleteWeek7)

module.exports = router