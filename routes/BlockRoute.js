const express=require('express');
let route=express.Router();
const controllers=require('../controllers/Blockcontrollers')
const UserMiddlewares=require('../middlewares/UserMiddlewares')
route.post('/block',controllers.BlockUser);
route.put('/unblock',controllers.UnblockUser);
module.exports=route;