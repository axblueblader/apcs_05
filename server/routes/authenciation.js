const express=require('express');
let route=express.Router();
let controllers= require('../controllers/userControllers');
let bodyParser=require('body-parser');
let urlencoded= bodyParser.urlencoded({ extended: false })
route.use(urlencoded);

route.get('/signup',urlencoded,controllers.signup);
route.get('/signin',urlencoded,controllers.signin);

module.exports=route;