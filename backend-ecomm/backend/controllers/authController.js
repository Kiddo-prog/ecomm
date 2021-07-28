var passport = require('passport');
var userdb = require('./../models/userModels');
var express = require('express');

var app = express()
// User login
app.get('/login', (req, res) => {
    if(req.username) {
        return res.redirect('/products')
    }
    res.render('/login');
})

app.post('/login', passport.authenticate('local'), {
    successRedirect: '/products',
    failureRedirect: '/login'
})
// User sign up 
app.post('/signup', (req, res) => {

})

// User logout
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})