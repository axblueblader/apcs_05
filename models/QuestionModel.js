const mongoose=require('mongoose');
const SchemaName=require('./SchemaNames')
let schema=mongoose.Schema;
let questionSchemas= new schema({
    content:String,
    ans: String
})
module.exports=mongoose.model(SchemaName.QuestionSchema,questionSchemas);