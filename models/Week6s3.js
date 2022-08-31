const mongoose = require('mongoose')

const Week6s3Schema = new mongoose.Schema({
    week6s3:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week6s3', Week6s3Schema)