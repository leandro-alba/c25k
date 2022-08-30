const express = require('express')
const router = express.Router()
const week4Controller = require('../controllers/week4')

router.get('/', week4Controller.getWeek4)

router.post('/createWeek4', week4Controller.createWeek4)

router.delete('/deleteWeek4', week4Controller.deleteWeek4)

module.exports = router