const mongoose = require("mongoose");

const Schema = mongoose.Schema

const user = new Schema({
    name: {type: String, required},
    password: {type: String, required},
    phone: {type: Number, required},
    email: {type: String, required}
})

module.exports = mongoose.model('users', user)