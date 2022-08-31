const mongoose = require('mongoose')

const Week6s2Schema = new mongoose.Schema({
    week6s2:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week6s2', Week6s2Schema)