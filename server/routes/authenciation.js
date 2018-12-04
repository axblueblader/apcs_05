const express=require('express');
let route=express.Router();
let controllers= require('../controllers/userControllers');
let bodyParser=require('body-parser');
let urlencoded= bodyParser.urlencoded({ extended: false })
const UserStatus=require('../models/UserStatus')
route.use(urlencoded);

route.get('/signup',urlencoded,controllers.signup);
route.get('/signin',urlencoded,controllers.signin);
route.get('/changepass',urlencoded,controllers.changePassword);

module.exports=route;