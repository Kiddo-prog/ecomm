const mongoose = require('mongoose');
const product = require('./models/productModel')

mongoose.connect('mongodb://localhost/product_db', {useNewUrlParser: true})

product.create({
    name: 'Versace', 
    ratings: 5.0, 
    size: 'medium', 
    category: 'Male', 
    price: 1000,
    description: "Cloth imported from oversea which is a good product to buy"
    }, (error) => {
    console.log(error)
    })