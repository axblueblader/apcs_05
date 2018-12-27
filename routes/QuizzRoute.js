const express=require('express');
let route=express.Router();
const controllers = require('../controllers/QuizzControllers')
const bodyParser=require('body-parser'); 
const UserMiddlewares=require('../middlewares/UserMiddlewares')
let multer = require('multer');

const storage=multer.diskStorage({//định dạng công cụ lưu
    destination: function(req,file,cb){//nơi lưu 
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){//định dạng tên file dể lưu
        cb(null,file.originalname);
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

route.put('/startquizz',UserMiddlewares.BasicAuthenciation,controllers.getGrades);
route.post('/updatedatabase',UserMiddlewares.BasicAuthenciation,UserMiddlewares.CheckForPemission,controllers.uploadQuestions);
route.get('/loadquestion',UserMiddlewares.BasicAuthenciation,   controllers.loadQuestions);
route.put('/terminatequizz',UserMiddlewares.BasicAuthenciation,controllers.TerminateQuizz)
module.exports=route;

