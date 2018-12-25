const express=require('express');
let route=express.Router();
let controllers= require('../controllers/UserControllers');
let bodyParser=require('body-parser');
let urlencoded= bodyParser.urlencoded({ extended: false })
const UserStatus=require('../models/UserStatus')

let multer = require('multer');

const storage=multer.diskStorage({//định dạng công cụ lưu
    destination: function(req,file,cb){//nơi lưu 
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){//định dạng tên file dể lưu
        cb(null, new Date().toISOString()+file.originalname);
    }
})

const filefilter=(req,file,cb)=>{
    cb(null,true);

}

const upload=multer({storage: storage,//công cụ lưu
    limits:  {
    fileSize:  1024 * 1024 * 5//5mb    
},
    fileFilter:filefilter
}
)

route.use(upload.any());


//ADDING MIDDLEWARES
route.use(urlencoded);
const UserMiddlewares=require('../middlewares/UserMiddlewares')


route.put('/signup',UserMiddlewares.CheckPhoneNumber,controllers.signup);
route.post('/signin',controllers.signin);
route.put('/changepass',controllers.changePassword);
route.put('/signout',UserMiddlewares.BasicAuthenciation,controllers.logout);
route.get('/testtoken',UserMiddlewares.BasicAuthenciation)
module.exports=route;

