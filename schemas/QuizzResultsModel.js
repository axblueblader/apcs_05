const mongoose=require('mongoose');
const Schemaname=require('../schemas/SchemaNames')
let schema=mongoose.Schema;
let QuizzResult=new schema({
    userID: String,
    userAns: String
})
module.exports=mongoose.model(Schemaname.QuizzResultSchema,QuizzResult)