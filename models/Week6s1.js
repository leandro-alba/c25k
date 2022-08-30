const mongoose = require('mongoose')

const Week6s1Schema = new mongoose.Schema({
    week6s1:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week6s1', Week6s1Schema)