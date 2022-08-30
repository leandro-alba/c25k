const mongoose = require('mongoose')

const Week3Schema = new mongoose.Schema({
    week3:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week3', Week3Schema)