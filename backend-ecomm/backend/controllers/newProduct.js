const express = require('express');

const newProduct = express.Router()

newProduct.get('/', (req, res, next) => {
    res.render('product success')
    next()
})

module.exports = newProduct