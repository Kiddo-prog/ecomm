const mongoose = require("mongoose");

const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderId: {
        type: Number
    },
    quantity: {
        type: Number
    },
    price: 
    {
        type: Number
    },
    price: 
    {
        type: Number, 
    }
})

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel