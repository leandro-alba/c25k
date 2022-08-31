const mongoose = require('mongoose')

const Week7s2Schema = new mongoose.Schema({
    week7s2:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week7s2', Week7s2Schema)