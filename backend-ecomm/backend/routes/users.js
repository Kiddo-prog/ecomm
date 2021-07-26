var express = require('express');
var user = express.Router();

/* GET users listing. */
user.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = user;
