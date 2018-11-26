const mongoose=require('mongoose');
let schema= mongoose.Schema;
let quizzSchemas=new schema({
    userID: String,
    userAns: String
})
module.exports=mongoose.model("Quizz Schemas",quizzSchemas);

