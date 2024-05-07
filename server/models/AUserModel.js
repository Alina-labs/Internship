const mongoose = require('mongoose');

const auserSchema = new mongoose.Schema({
    name:String,
    email:String,
    number: Number,
    password:String,
    city: String
});

module.exports = mongoose.model("users", auserSchema);