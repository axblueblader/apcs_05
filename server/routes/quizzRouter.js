const express=require('express');
const controllers=require('../controllers/quizzControllers');
let route=express.Router();
let bodyParser=require('body-parser');
let urlencoded= bodyParser.urlencoded({ extended: false })
route.use(urlencoded);

route.get('/',(req,res,next)=>{
    res.send("Running Quizz Route")
})

route.get('/start',urlencoded,controllers.partnerResult,controllers.startQuizz);



module.exports=route;