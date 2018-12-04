let userSchema= require('../models/usersSchema');
let userStatus=require('../models/UserStatus');
const mongoose=require('mongoose')
const GLOBAL=require('../Global');

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
       GLOBAL.UserInfo=user;
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



