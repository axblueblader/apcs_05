const mongoose=require('mongoose'); 
const service=require('../services/UserService');
const UserStatus=require('../models/UserStatus')
exports.signin=async function (req,res,next){
    let userNumber = req.body.userPhone;
    let userPassword=req.body.userPass;
    const output= await service.CheckForSignIn(userNumber,userPassword);
    return res.json(output);     
}

exports.signup= async function (req,res,next){
    let Name=req.body.userName;
    let Phone=req.body.userPhone;
    let Pass=req.body.userPass;
    let Gender=req.body.userGender;
    const output=await service.UserSignUp(Name,Phone,Pass,Gender); 
    return res.json(output);
}


exports.changePassword= async function (req,res,next){
    let newPasswords=req.body.newPasswords;
    let oldPasswords=req.body.oldPasswords;
    let userPhone=req.body.userPhone;
    const output= await service.changePasswords(userPhone,newPasswords,oldPasswords);
    return res.json(output);
}


exports.logout=async function (req,res,next){
    let userID=req.user._id;
    const output= await service.logout(userID);
    return res.json(output);
}
