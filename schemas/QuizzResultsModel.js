const mongoose=require('mongoose');
const Schemaname=require('../schemas/SchemaNames')
const quizzStatus=require('../models/QuizzStatus')
let schema=mongoose.Schema;
let QuizzResult=new schema({
    userID: {type: String, required: true},
    partnerID: {type: String, required: true},
    ans1: {type: String, required: true,default:"Nothing"},
    ans2:{type:String, required: true,default:"Nothing"},
    quizzStatus:{type: String , default: quizzStatus.WAIT_FOR_PARTNER,required: true},
    grades: {type: Number,default:0}
})
module.exports=mongoose.model(Schemaname.QuizzResultSchema,QuizzResult)