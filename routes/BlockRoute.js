const express=require('express');
let route=express.Router();
const controllers=require('../controllers/Blockcontrollers')
const UserMiddlewares=require('../middlewares/UserMiddlewares')
route.post('/block',UserMiddlewares.BasicAuthenciation,controllers.BlockUser);
route.put('/unblock',UserMiddlewares.BasicAuthenciation,controllers.UnblockUser);
module.exports=route;