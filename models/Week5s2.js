const mongoose = require('mongoose')

const Week5s2Schema = new mongoose.Schema({
    week5s2:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week5s2', Week5s2Schema)