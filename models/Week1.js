const mongoose = require('mongoose')

const Week1Schema = new mongoose.Schema({
    week1:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week1', Week1Schema)