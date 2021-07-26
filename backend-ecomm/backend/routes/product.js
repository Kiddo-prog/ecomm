var express = require('express');
var fs = require('fs');
var multer = require('multer');
var product = express.Router();
var newProduct = require('./../controllers/newProduct');

// CRUD (create, update, update, delete)
/* GET users listing. */
product.get('/', function(req, res, next) {
  res.json({name: 'Versace', ratings: 5.0, size: 'medium', category: 'Male', description: "Cloth imported from oversea which is a good product to buy"});
});

newProduct.get('/new', (res, req, next) => {
  res.json({name: 'Versace', ratings: 5.0, size: 'medium', category: 'Male', description: "Cloth imported from oversea which is a good product to buy"});
  next()
})

newProduct.get('/new/<id>', (res, req, next) => {
  res.send('Products updated success');
  next();
})

module.exports = product;
