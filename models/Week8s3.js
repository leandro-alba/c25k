const mongoose = require('mongoose')

const Week8s3Schema = new mongoose.Schema({
    week8s3:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week8s3', Week8s3Schema)