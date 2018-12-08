let userSchema= require('../schemas/usersSchema');
let userStatus=require('../models/UserStatus');
const mongoose=require('mongoose')
const QuizzResultSchema=require('../schemas/QuizzResultsModel');
const ImgQuestionSchema=require('../schemas/ImgQuestionModel');
const quizzStatus=require('../models/QuizzStatus')


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
       let result={Status: status, data: user}; 
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
    let json={Status:"Log out sucessfully",data: user};
    return json;
}

