let userSchema= require('../schemas/usersSchema');
let userStatus=require('../models/UserStatus');
const mongoose=require('mongoose')
const QuestionSchema=require('../schemas/QuestionModel');
const QuizzResultSchema=require('../schemas/QuizzResultsModel');
const ImgQuestionSchema=require('../schemas/ImgQuestionModel');


     /**    Json returned type
            {
                Status: "SignedIn"/"WrongPassWords"/"No accounts found"
                UserInfo: User{}
            }
      **/

      
exports.CheckForSignIn= async function(userphone,userPass)
{
    const user= await userSchema.findOne({userPhone:userphone})
    let status;
       if (user) {//user already signed up
         //check the passwords
          //console.log(doc);
          console.log(user.userPasswords);
         if(user.userPasswords==userPass)
         {
             //set the global ID
             console.log("Checking passwords");
             console.log("Login successfully with User:");
             console.log(user)
             status=userStatus.SIGNED_IN;
             user.userStatus=userStatus.ONLINE;
             await userSchema.update({_id:user._id},{$set:{userStatus:userStatus.ONLINE}});
         }
         else{
             console.log("Wrong passwords!")
             status=userStatus.WRONG_PASSWORDS;
         }
           } 
           
           else {
         console.log("No data exist for this users");
         status=userStatus.NO_ACCOUNTS
       }

       //return the json file
       let result={Status: status, UserInfo: user}; 
       return result;
      
}

exports.UserSignUp= async function (Name,Phone,Pass)
{
    let newUser= new userSchema({
        _id: mongoose.Types.ObjectId(),
        userName:Name,
        userPhone:Phone,
        userPasswords:Pass
    });
    await newUser.save();
    let status=userStatus.SIGN_UP_SUCCESSFULLY;
    let result={Status: status,UserInfo: newUser};
    return result;

}

exports.changePasswords=async function(userPhone,newPasswords)
{
    const userUpdated=await userSchema.findOneAndUpdate({userPhone},{$set:{userPasswords:newPasswords}},{new:true})  
    let result={Status: userStatus.CHANGE_PASS,UserInfo:userUpdated};
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


exports.logout=async function(userID)
{
    const user= await userSchema.update({_id:userID},{$set:{userStatus:userStatus.OFFLINE}});
    let json={Status:"Log out sucessfully",UserInfo: user};
    return json;
}

