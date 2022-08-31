const mongoose = require('mongoose')

const Week7s3Schema = new mongoose.Schema({
    week7s3:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week7s3', Week7s3Schema)