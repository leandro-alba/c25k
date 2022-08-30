const express = require('express')
const router = express.Router()
const week1Controller = require('../controllers/week1')

router.get('/', week1Controller.getWeek1)

router.post('/createWeek1', week1Controller.createWeek1)

router.delete('/deleteWeek1', week1Controller.deleteWeek1)

module.exports = router