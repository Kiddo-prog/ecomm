const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required,
    },
    password: {
        type: String, 
        required,
    },
    phone: {
        type: Number, 
        required,
    },
    email: {
        type: String, 
        required,
    }
})

module.e, requiredxports = mongoose.model('users', userSchema)