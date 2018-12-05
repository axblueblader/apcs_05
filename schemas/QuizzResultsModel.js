const mongoose=require('mongoose');
const Schemaname=require('../schemas/SchemaNames')
const quizzStatus=require('../models/QuizzStatus')
let schema=mongoose.Schema;
let QuizzResult=new schema({
    userID: String,
    partnerID: String,
    userAns: String,
    quizzStatus:{type: String , default: quizzStatus.WAIT_FOR_PARTNER}
})
module.exports=mongoose.model(Schemaname.QuizzResultSchema,QuizzResult)