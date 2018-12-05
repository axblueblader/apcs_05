const UserModel=require('../schemas/usersSchema');
const UserStatus=require('../models/UserStatus')
    exports.AlreadySignedIn=async function (req,res,done) {
        console.log("Run AlreadySignedIn()")
        console.log("Find user")
        let currentuser=  await UserModel.findOne({_id: req.body.userID});
        console.log(currentuser);
        
        console.log(req.body.userID)
        console.log(currentuser.userStatus)
     //   console.log(currentuser);
        if(currentuser.userStatus===UserStatus.OFFLINE){
            console.log("It's null")
            let json={Error:"User is OFFLINE",currentuser};  
            res.send(json)
        }
        else{
             done()
        }
    }

    exports.CheckForPemission= async function (req,res,done){

        console.log("Run CheckForPermission")
        console.log("Find user")
        let currentuser=  await UserModel.findOne({_id: req.body.userID});
        console.log(currentuser);
        if (currentuser.accessmethod==UserStatus.USER_ACCESS)
        {
            let json={Error:"User are NOT ALLOWED",currentuser}
            res.send(json)
        }
        else done()

    }
