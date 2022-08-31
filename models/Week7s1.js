const mongoose = require('mongoose')

const Week7s1Schema = new mongoose.Schema({
    week7s1:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week7s1', Week7s1Schema)