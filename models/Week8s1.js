const mongoose = require('mongoose')

const Week8s1Schema = new mongoose.Schema({
    week8s1:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Week8s1', Week8s1Schema)