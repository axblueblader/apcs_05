const mongoose=require('mongoose')
const QuestionSchema=require('../schemas/QuestionModel');
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

exports.getGrades=async function(userid,userans,partnerID){
    console.log("Running Get grades - SERVICES")
    console.log("User Id: "+userid);
    console.log("User ans: "+userans);
    console.log("Partner ID: "+partnerID);

    
    const partner= await QuizzResultSchema.findOne({userID: partnerID,partnerID: userid});
    console.log(partner)
    if(partner)//partner gửi câu trả lời lên
    {
        //start grading
        //after get grades -> delete the db 
        if(partner.quizzStatus===quizzStatus.WAIT_FOR_PARTNER)//partner đã gửi lên và cũng đang chờ -> tính điểm, trả file, xoá khỏi db
        {
            let grade=0;
            for (let i=0;i<5;i++){
                if (userans[i]==partner.userAns[i])
                {
                    grade++;
                }
            }
            await QuizzResultSchema.remove({userID: partnerID,partnerID: userid});//xoá đáp án của partner
            await QuizzResultSchema.remove({userID: userid,partnerID: partnerID});//xoá đáp án của mình
            //create json file
            let result={userId: userid, partnerId:partnerID,grades:grade}
            return result;
        }
        else{//hết tg chờ -> xoá đáp án của th đó luôn
            await QuizzResultSchema.remove({userID: partnerID,partnerID: userid});
            let result={Status: quizzStatus.TIME_OUT};
            return result;

        }



    }
    else{
        //save the user into the dbççç
        let user= new QuizzResultSchema({
            userID: userid,
            userAns: userans,
            partnerID: partnerID
        });
        await user.save();
        let result={Status:"Waiting for your Partner",YourAnsInfo:user}
        return result
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
    let json={Status: quizzStatus.TERMINATED, QuizzInfo: terminateQuizzOf}
    return json;
}