const express = require('express')
const router = express.Router()
const week52Controller = require('../controllers/week5s2')

router.get('/', week52Controller.getWeek5)

router.post('/createWeek5', week52Controller.createWeek5)//this is our POST method

router.delete('/deleteWeek5', week52Controller.deleteWeek5)

module.exports = router