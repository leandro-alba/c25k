const express = require('express')
const router = express.Router()
const week3Controller = require('../controllers/week3')

router.get('/', week3Controller.getWeek3)

router.post('/createWeek3', week3Controller.createWeek3)

router.delete('/deleteWeek3', week3Controller.deleteWeek3)

module.exports = router