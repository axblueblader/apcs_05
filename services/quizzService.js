const mongoose=require('mongoose')
const QuestionSchema=require('../schemas/QuestionModel');
const QuizzResultSchema=require('../schemas/QuizzResultsModel');
const ImgQuestionSchema=require('../schemas/ImgQuestionModel');
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

    let grade=0;
    const partner= await QuizzResultSchema.findOne({userID: partnerID});
    console.log(partner)
    if(partner)
    {
        //start grading
        for (let i=0;i<5;i++){
            if (userans[i]==partner.userAns[i])
            {
                grade++;
            }
        }
        console.log("SERVICE - Grades=  "+grade)
        //after get grades -> delete the db
        await QuizzResultSchema.remove({_id:partnerID});
        await QuizzResultSchema.remove({_id:userid});
        //create json file
        let result={userId: userid, partnerId:partnerID,grades:grade}
        return result;

    }
    else{
        //save the user into the dbççç
        let user= new QuizzResultSchema({
            userID: userid,
            userAns: userans
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