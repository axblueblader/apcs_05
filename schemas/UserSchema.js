const mongoose=require('mongoose');
let schema= mongoose.Schema;
const Schemaname=require('../schemas/SchemaNames')
const UserStatus=require('../models/UserStatus')

const userSchema=new schema({
    _id:{type: String, required: true},
    userName: {type: String, required: true},
    userPhone: {type: String, required: true},
    userPasswords: {type: String, required: true},
    accessmethod:{type: String, default: UserStatus.USER_ACCESS,required: true},
    userStatus: {type: String, default: UserStatus.OFFLINE,required: true},
    userGender: {type: String, enum:[UserStatus.GENDER_MALE,UserStatus.GENDER_FEMALE,UserStatus.GENDER_UNDEFINED]} 
})

module.exports=mongoose.model(Schemaname.UserSchemas,userSchema);

