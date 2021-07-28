const mongoose = require("mongoose");

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true 
    },
    category: 
    {
        type: String, 
        list: ['Men', 'Women', 'Kids']
    },
    price: 
    {
        type: Number, 
    },
    img: {
        type: String
    },
    quantity: {
        type: Number
    },      
    desc: 
    {
        type: Text
    }
})

const productModel = mongoose.model('products', productSchema)
module.exports = productModel