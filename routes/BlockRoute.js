const express=require('express');
let route=express.Router();
const controllers=require('../controllers/Blockcontrollers')
const UserMiddlewares=require('../middlewares/UserMiddlewares')
route.post('/block',UserMiddlewares.AlreadySignedIn,controllers.BlockUser);
route.put('/unblock',UserMiddlewares.AlreadySignedIn,controllers.UnblockUser);
module.exports=route;