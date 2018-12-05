const mongoose=require('mongoose');
let schema= mongoose.Schema;
const Schemaname=require('../schemas/SchemaNames')
const UserStatus=require('../models/UserStatus')
const userSchema=new schema({
    _id:String,
    userName: String,
    userPhone: String,
    userPasswords: String,
    accessmethod:{type: String, default: UserStatus.USER_ACCESS},
    userStatus: {type: String, default: UserStatus.OFFLINE}
})

module.exports=mongoose.model(Schemaname.UserSchemas,userSchema);
