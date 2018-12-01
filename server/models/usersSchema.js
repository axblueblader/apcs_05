const mongoose=require('mongoose');
let schema= mongoose.Schema;
const Schemaname=require('../models/SchemaNames')
const UserStatus=require('../models/UserStatus')
const userSchema=new schema({
    id_:String,
    userName: String,
    userPhone: String,
    userPasswords: String,
    accessmethod:{type: String, default: UserStatus.USER_ACCESS}
})

module.exports=mongoose.model(Schemaname.UserSchemas,userSchema);
