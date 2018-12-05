const express=require('express');
let route=express.Router();
const controllers = require('../controllers/quizzControllers')
const bodyParser=require('body-parser'); 
const UserMiddlewares=require('../middlewares/UserMiddlewares')
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
route.use(bodyParser.urlencoded({ extended: false }))

route.get('/startquizz',UserMiddlewares.AlreadySignedIn,controllers.getGrades);
route.post('/updatedatabase',UserMiddlewares.AlreadySignedIn,UserMiddlewares.CheckForPemission,controllers.uploadQuestions);
route.get('/loadquestion',UserMiddlewares.AlreadySignedIn,controllers.loadQuestions);
route.put('/terminatequizz',UserMiddlewares.AlreadySignedIn,controllers.TerminateQuizz)
module.exports=route;
