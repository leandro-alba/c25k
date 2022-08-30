const mongoose = require('mongoose')

const Week5s3Schema = new mongoose.Schema({
    week5s3:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week5s3', Week5s3Schema)