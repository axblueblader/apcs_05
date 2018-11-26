const mongoose=require('mongoose');
let userSchema= require('../models/usersSchema');
exports.signin=(req,res,next)=>{
    res.send("Running Sign in")
    //console.log(req.body.phoneNumber)
    userSchema.find({userPhone:req.body.phoneNumber})
  .then((doc)=> { 
     if (doc) {//user already signed up
       //check the passwords
        //console.log(doc);
        console.log(doc[0].userPasswords);
       if(doc[0].userPasswords==req.body.userPass)
       {
           //set the global ID
           console.log("Checking passwords");
           GLOBALUserID=doc[0]._id;
           console.log("Login successfully with ID: "+GLOBALUserID)
       }
       else{
           console.log("Wrong passwords!")
       }
         } else {
       console.log("No data exist for this users");
     }
    })        
}

exports.signup=(req,res,next)=>{
    //tìm trong data rồi mới cho sign up
   res.send("Running Sign up - controllers")
    let Name=req.body.userName;
    let Phone=req.body.userPhone;
    let Pass=req.body.userPass;

    let newUser= new userSchema({
        id: mongoose.Types.ObjectId(),
        userName:Name,
        userPhone:Phone,
        userPasswords:Pass
    });
    console.log("Sign up successfully!");
    newUser.save();
    //res.send("Added")
}


exports.changePassword=(req,res,next)=>{
    res.send("Running Changing Passwords")
    userSchema.findOneAndUpdate({userPhone:req.body.userPhone},{$set:{userPasswords:req.body.newPasswords}},{new:true})
}


