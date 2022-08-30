const mongoose = require('mongoose')

const Week5s1Schema = new mongoose.Schema({
    week5s1:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week5s1', Week5s1Schema)