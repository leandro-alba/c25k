const express = require('express')
const router = express.Router()
const week82Controller = require('../controllers/week8s2')

router.get('/', week82Controller.getWeek8)

router.post('/createWeek8', week82Controller.createWeek8)

router.delete('/deleteWeek8', week82Controller.deleteWeek8)

module.exports = router