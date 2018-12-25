const service=require('../services/QuizzService')

exports.loadQuestions=async function (req,res,next){
        const output= await service.loadDatabase();
        return res.json(output)
    }

    exports.getGrades= async function (req,res,next){
        let userID=req.user._id;
        let userAns=req.body.userAns;
        let partnerID=req.body.partnerID;
        const output= await service.getGrades(userID,userAns,partnerID);
        return res.json(output);
    }


    exports.uploadQuestions=async function (req,res,next){
        let picArr=req.files;
        console.log(picArr)
        const output= await service.uploadQuestions(picArr);
        return res.json(output);
    }


    exports.TerminateQuizz= async function(req,res,next){
        let userID=req.user._id;
        let partnerID=req.body.partnerID;
        const output= await service.TerminateQuizz(userID,partnerID)
        return res.json(output);
    }
