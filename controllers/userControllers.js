const mongoose=require('mongoose');
const service=require('../services/UserService');
const UserStatus=require('../models/UserStatus')
exports.signin=async function (req,res,next){
   // res.send("Running Sign in")
    //console.log(req.body.phoneNumber)
    console.log("Running Sign in - CONTROLLERS")
    let userNumber = req.body.userPhone;
    let userPassword=req.body.userPass;
    const output= await service.CheckForSignIn(userNumber,userPassword);
    sess=req.session;
    if( output.Status===UserStatus.SIGNED_IN)
    {
        sess.userName= output.data.userName;
        sess.userPhone= output.data.userPhone;
    }    
    return res.json(output);     
}

exports.signup= async function (req,res,next){
    //tìm trong data rồi mới cho sign up
   //res.send("Running Sign up - controllers")
    let Name=req.body.userName;
    let Phone=req.body.userPhone;
    let Pass=req.body.userPass;
    let Gender=req.body.userGender;
    const output=await service.UserSignUp(Name,Phone,Pass,Gender);
    
    return res.json(output);
}


exports.changePassword= async function (req,res,next){
    //res.send("Running Changing Passwords")
    let newPasswords=req.body.newPasswords;
    let oldPasswords=req.body.oldPasswords;
    let userPhone=req.body.userPhone;
    const output= await service.changePasswords(userPhone,newPasswords,oldPasswords);
    return res.json(output);
    //nếu có update: thì thêm pass cũ vào rồi mới cho check.
}


exports.logout=async function (req,res,next){
    console.log("Running log out - CONTROLLERS")
    let userID=req.body.userID;
    const output= await service.logout(userID);
    if(output.Status===UserStatus.SIGNED_OUT)
    {
        req.session.destroy;
    }
    return res.json(output);
}

exports.displayInfo= async function(req,res,next){
    sess= req.session;
    if(sess.userName !=null && sess.userPhone!=null)
    {
        let data={Name: sess.userName,Phone: sess.userPhone}
        let result = {Status:"Testing",data: data }
        res.json(result);
    }
    else{
        res.json({
            Status:"NULL"
        })
    }
}

