const express = require('express')
const router = express.Router()
const week72Controller = require('../controllers/week7s2')

router.get('/', week72Controller.getWeek7)

router.post('/createWeek7', week72Controller.createWeek7)

router.delete('/deleteWeek7', week72Controller.deleteWeek7)

module.exports = router