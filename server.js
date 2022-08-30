const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')

const week1Routes = require('./routes/week1')
const week2Routes = require('./routes/week2')
const week3Routes = require('./routes/week3')
const week4Routes = require('./routes/week4')
const week51Routes = require('./routes/week5s1')
const week52Routes = require('./routes/week5s2')
const week53Routes = require('./routes/week5s3')
const week61Routes = require('./routes/week6s1')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)//home page
app.use('/week1', week1Routes)
app.use('/week2', week2Routes)
app.use('/week3', week3Routes)
app.use('/week4', week4Routes)
app.use('/week5s1', week51Routes)
app.use('/week5s2', week52Routes)
app.use('/week5s3', week53Routes)
app.use('/week6s1', week61Routes)

app.listen(process.env.PORT, ()=>{
    console.log('📶📶📶')
})    