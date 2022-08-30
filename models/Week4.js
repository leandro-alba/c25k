const mongoose = require('mongoose')

const Week4Schema = new mongoose.Schema({
    week4:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week4', Week4Schema)