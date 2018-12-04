const mongoose=require('mongoose')
const SchemaName=require('../models/SchemaNames')
let schema=mongoose.Schema;
let imgModels=new schema({
      firstchoice: {
            imgName: String,
            imgPath: String
      },
      secondchoice:{
            imgName: String,
            imgPath: String
      }
})
module.exports=mongoose.model(SchemaName.ImgQuestions,imgModels)