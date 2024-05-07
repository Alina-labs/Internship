const mongoose = require('mongoose');

const cuserSchema = new mongoose.Schema({
    name:String,
    email:String,
    number: Number,
    password:String,
    city: String
});

module.exports = mongoose.model("cusers", cuserSchema);