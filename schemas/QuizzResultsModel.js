const mongoose=require('mongoose');
const Schemaname=require('../schemas/SchemaNames')
const quizzStatus=require('../models/QuizzStatus')
let schema=mongoose.Schema;
let QuizzResult=new schema({
    userID: {type: String, required: true},
    partnerID: {type: String, required: true},
    userAns: {type: String, required: true},
    quizzStatus:{type: String , default: quizzStatus.WAIT_FOR_PARTNER,required: true}
})
module.exports=mongoose.model(Schemaname.QuizzResultSchema,QuizzResult)