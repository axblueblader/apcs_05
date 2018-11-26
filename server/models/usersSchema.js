const mongoose=require('mongoose');
let schema= mongoose.Schema;

const userSchema=new schema({
    userName: String,
    userPhone: String,
    userPasswords: String
})

module.exports=mongoose.model("User Schema",userSchema);
