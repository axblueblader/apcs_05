const service=require('../services/quizzService')
const GLOBAL=require('../Global')

    exports.loadQuestions=async function (req,res,next){
        console.log("Running load question - CONTROLLERS")
        const output= await service.loadDatabase();
        console.log("Here is the output:");
        console.log(output)
        console.log("return the json output")
        return res.json(output)
    }

    exports.getGrades= async function (req,res,next){
        console.log("Running get grades")
        let userID=req.body.userID;
        let userAns=req.body.userAns;
        let partnerID=req.body.partnerID;
        const output= await service.getGrades(userID,userAns,partnerID);
        return res.json(output);
    }


    exports.uploadQuestions=async function (req,res,next){
        console.log("Running upload questions - CONTROLLERS");
        let picArr=req.files;
        const output= await service.uploadQuestions(picArr);
        return res.json(output);
    }


    exports.TerminateQuizz= async function(req,res,next){
        let userID=req.body.userID;
        let partnerID=req.body.partnerID;
        const output= await service.TerminateQuizz(userID,partnerID)
        return res.json(output);
    }
