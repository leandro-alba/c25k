const mongoose = require('mongoose')

const Week8s2Schema = new mongoose.Schema({
    week8s2:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week8s2', Week8s2Schema)