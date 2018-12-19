const UserModel=require('../schemas/usersSchema');
const UserStatus=require('../models/UserStatus')
const jwt=require('jsonwebtoken')
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
        //console.log("Run CheckForPermission")
        //console.log("Find user")
        //let currentuser=  await UserModel.findOne({_id: req.body.userID});
        let currentuser=  req.user;
        console.log(currentuser);
        if (currentuser.accessmethod==UserStatus.USER_ACCESS)
        {
            let json={Error:"User are NOT ALLOWED",currentuser}
            res.send(json)
        }
        else done()

    }

    exports.CheckPhoneNumber= async function (req,res,done){
        console.log("Run Check Phone Number")
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
    // check header for the token
    let token = req.body.token;
    let id;
    if (token) {
      // verifies secret and checks if the token is expired
      jwt.verify(token, "TEST_USER_SECRET_KEY", (err, decoded) =>{      
        if (err) {
          res.json({ Status: UserStatus.INVALID_TOKEN });    
        } 
          else{
        // if everything is good, save to request for use in other routes
          console.log("Decoded:") 
          console.log(decoded)
          id=decoded._id
          console.log("-----")
          }
          //If received non-null token -> ALREADY SIGNED IN -> Query User info in the token containing the ID. 
          //QUERY the user 
        
      });
      if(id)
      {
        let currentuser=  await UserModel.findOne({_id: id});
        req.user=currentuser
        done();
      }
    }
    else
        res.send({Status: UserStatus.NO_TOKEN_FOUND})
}


