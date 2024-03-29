let userSchema= require('../schemas/UserSchema');
let userStatus=require('../models/UserStatus');
const mongoose=require('mongoose')
const QuizzResultSchema=require('../schemas/QuizzResultsModel');
const ImgQuestionSchema=require('../schemas/ImgQuestionModel');
const quizzStatus=require('../models/QuizzStatus')
let jwt= require('jsonwebtoken')
const config=require('../config/config')
const AccessTokenSchema= require('../schemas/AccessTokenSchema')
const encrypt = require('crypto')

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
         // console.log(user.userPasswords);
          
         if(user.userPasswords==userPass)
         {
             console.log("Checking passwords");
             console.log("Login successfully with User:");
             console.log(user)
        //    if(user.userStatus==userStatus.ONLINE)
        //    {
        //        let json={Status: userStatus.ALREADY_SIGNED_IN, token:null}
        //        return json;
        //    }
                status=userStatus.SIGNED_IN;
                user.userStatus=userStatus.ONLINE;
                await userSchema.update({_id:user._id},{$set:{userStatus:userStatus.ONLINE}});
                //TOKEN HANDLING 
                let token = encrypt.randomBytes(32).toString("hex");
                //upload to database
                 const model ={
                     userID: user._id,
                 }
                 await AccessTokenSchema.remove(model);
                 model.token=token;
                 const userToken = new AccessTokenSchema(model);
                 await userToken.save();
                return {Status: status,data: user, Token: token}
             }
             else{
                console.log("Wrong passwords!")
                status=userStatus.WRONG_PASSWORDS;
                return {Status: status,Token: null}
            }
         }
           else {
            console.log("No data exist for this users");
            status=userStatus.NO_ACCOUNTS
            return {Status: status,Token: null}
       }

      
}

exports.UserSignUp= async function (Name,Phone,Pass,Gender)
{
    console.log("Run sign up")
    let newUser= new userSchema({
        _id: mongoose.Types.ObjectId(),
        userName:Name,
        userPhone:Phone,
        userPasswords:Pass,
        userGender: Gender
    });
    await newUser.save();
    let status=userStatus.SIGN_UP_SUCCESSFULLY;``
    let result={Status: status,data: newUser};
    return result;

}

exports.changePasswords=async function(userPhone,newPasswords,oldPasswords)
{
    const userUpdated=await userSchema.findOne({userPhone : userPhone});
    if(userUpdated.userPasswords===oldPasswords)
    {
        userUpdated=await userSchema.findOneAndUpdate({userPhone},{$set:{userPasswords:newPasswords}},{new:true})  
        await userUpdated.save();
    let result={Status: userStatus.CHANGE_PASS,data:userUpdated};
    return result;

    }
    else{
        let result = {Status: userStatus.WRONG_PASSWORDS,data: userUpdated};
        return result;
    }
}

exports.logout=async function(userID)
{
    const user= await userSchema.update({_id:userID},{$set:{userStatus:userStatus.OFFLINE}});
    let json={Status:userStatus.SIGNED_OUT,data: user};
    return json;
}

