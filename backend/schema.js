const mongoose = require('mongoose')
const postmodel = mongoose.Schema({
    name:String,
    disc:String,
    id: Number
})
module.exports = mongoose.model('complain',postmodel)