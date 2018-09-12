'use strict';
var express = require('express');
var Routes = express.Router();
var DB = require('./db');

Routes.route('/all').get(function (req, res, next) {
    res.send('all-yoonai');
});
Routes.route('/session').get(function(req,res,next){
    if(req.session.views) {
        ++req.session.views;
    } else {
        req.session.views = 1;
    }
    req.session.lang = 'en';
    res.send(req.session);
});
Routes.route('/login').get(function(req,res,nex){
    res.send('Viewed <strong>' + req.session.views + '</strong> times.'); 
});

// create a todo item
Routes.route('/signup').post(function (req, res) {
    DB.create({
      FirstName: req.body.FirstName,
      LastName:req.body.LastName,
      Email:req.body.Email,
      Password:req.body.Password
    },
    function (error, user) {
        if (error) {
            res.status(400).send('Unable to create user list')
        }
        res.status(200).json(user);
    });
});

module.exports = Routes;