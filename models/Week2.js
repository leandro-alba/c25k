const mongoose = require('mongoose')

const Week2Schema = new mongoose.Schema({
    week2:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
   
})

module.exports = mongoose.model('Week2', Week2Schema)