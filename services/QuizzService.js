const mongoose=require('mongoose')
const QuizzResultSchema=require('../schemas/QuizzResultsModel');
const ImgQuestionSchema=require('../schemas/ImgQuestionModel');
const quizzStatus=require('../models/QuizzStatus')
var fs = require('fs');

exports.loadDatabase= async function(){
    console.log("Running Load database - SERVICE")
    let result= await ImgQuestionSchema.find({});
    console.log("Throw back the RESULTS - SERVICE with "+result)
    return result;

}

exports.getGrades=async function(userid,userans,partnerid){
    console.log("Running Get grades - SERVICES")
    console.log("User Id: "+userid);
    console.log("User ans: "+userans);
    console.log("Partner ID: "+partnerid);

    //Find the Result Info 
    //Check if our partner sent their ans
    let infoResult = await QuizzResultSchema.findOne({userID: partnerid,partnerID: userid})
    if(infoResult)
    {
        //They sent their ans
        if(infoResult==quizzStatus.TERMINATED)//TIME OUT
        {
            await infoResult.remove();
            let result = {Status: quizzStatus.TIME_OUT}
            return result;
        }
        else{
            //UPDATE THE RESULT INFO TO SEND IN THE RESPONE
            infoResult.ans2=userans;
            console.log(infoResult)
            //START GRADING
            let total=0;
            let ans1=infoResult.ans1,ans2=infoResult.ans2;
            for (let i=0; i < 5; i++)
            {
                if(ans1[i]==ans2[i]){
                    total++
                }
            }
            //UPDATE GRADES TO SEND IN RESUT INFO
            infoResult.grades=total;
            let result = {Status:quizzStatus.GET_GRADES_SUCCESS,data:infoResult};
            await infoResult.remove();
            return result;
        }
        
    }
    else{
        //they havent' sent their ans
        //check if we created before
        infoResult== QuizzResultSchema.findOne({userID: userid,partnerID: partnerid})
        if(infoResult)
        {
            //WE DID CREATE BEFORE
            let result = {Status: quizzStatus.WAIT_FOR_PARTNER,data: infoResult}
            return result;
        }
        //ELSE
        console.log("Create new Result Info")
        const model={
            userID: userid,
            partnerID: partnerid,
            ans1: userans,
        }
        infoResult = new QuizzResultSchema(model);
        await infoResult.save();
        let result = {Status: quizzStatus.WAIT_FOR_PARTNER,data: infoResult}
        return result;
    }
}

exports.uploadQuestions=async function(picArr)
{
    //res.send("Running Upload pictures & Create Database")
    /** Cách Dùng: thẻ body chọn tick FORM DATA chuyển [text] thành [ file ] 
     * rồi upload file bằng send requets
     * file đc bỏ trong thư mục uploads thuộc về server
     **/

    //cứ 2 hình trong picArr thì tạo 1 câu hỏi rồi cho vào Database mongoose
    
    let result=[]
    for (let i=0;i<picArr.length;i+=2)
    {
        let firstpicture=picArr[i];
        let secondpicture=picArr[i+1];
        let newQuestion= new ImgQuestionSchema();
        newQuestion.firstchoice.imgName=firstpicture.originalname;
        newQuestion.firstchoice.imgPath=firstpicture.path;

        newQuestion.secondchoice.imgName=secondpicture.originalname;
        newQuestion.secondchoice.imgPath=secondpicture.path;

        await newQuestion.save();
        let json={Status: "Added 1 question ",Question: newQuestion};
        result.push(json)
    }
    return result

        

    

}

exports.TerminateQuizz= async function(userID,partnerID)
{
    let terminateQuizzOf=  await QuizzResultSchema.update({userID: userID,partnerID: partnerID},{$set:{quizzStatus:quizzStatus.TERMINATED}})
    let json={Status: quizzStatus.TERMINATED, data: terminateQuizzOf}
    return json;
}
