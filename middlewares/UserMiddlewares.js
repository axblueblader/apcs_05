const UserModel=require('../schemas/UserSchema');
const UserStatus=require('../models/UserStatus')
const config=require('../config/config')
const AccessTokenSchema= require('../schemas/AccessTokenSchema')
const tokenStatus=require('../models/TokenStatus')
    exports.AlreadySignedIn=async function (req,res,done) {
        console.log("Run AlreadySignedIn()")
        console.log("Find user")
        let currentuser=  await UserModel.findOne({_id: req.body.userID});
        if(currentuser)
        {
            console.log(currentuser);
            console.log(req.body.userID)
            console.log(currentuser.userStatus)
            if(currentuser.userStatus===UserStatus.OFFLINE){
            console.log("It's null")
            let json={Status:UserStatus.OFFLINE,currentuser};  
            res.send(json)
        }
        else{
             done()
        }
        }
        else{
            let json={Status:UserStatus.NO_ACCOUNTS}
            res.send(json)
            
        }
    }

    exports.CheckForPemission= async function (req,res,done){
        let currentuser=  req.user;
        if (currentuser.accessmethod==UserStatus.USER_ACCESS)
        {
            let json={Error:"User are NOT ALLOWED",currentuser}
            res.send(json)
        }
        else done()

    }

    exports.CheckPhoneNumber= async function (req,res,done){
        let user= await UserModel.findOne({userPhone: req.body.userPhone});
        if (user)// phone number already exists
        {
            user.userPasswords=UserStatus.HASHED_PASSWORDS;
            let result = {Status: UserStatus.PHONE_EXIST,data: user};
            res.send(result)
        }
        else{
            done();
        }
    }

    exports.BasicAuthenciation = async function (req,res,done){
    let userToken = await AccessTokenSchema.findOne({token: req.headers['token']});
    if (userToken) {
      if (Math.round((Date.now() - userToken.createdDate)/1000) > config.TOKEN_LIFE)  
      {
        res.send({Status:tokenStatus.TOKEN_EXPIRED})
      }
      console.log("User token: ")
      console.log(userToken)
      let userID = userToken.userID;
      if(userID)
      {
        let currentuser=  await UserModel.findOne({_id: userID});
        req.user=currentuser
        done();
      }
    }
    else
        res.send({Status: UserStatus.NO_TOKEN_FOUND})
}


