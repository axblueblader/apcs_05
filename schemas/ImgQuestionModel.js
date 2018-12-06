const mongoose=require('mongoose')
const SchemaName=require('../schemas/SchemaNames')
let schema=mongoose.Schema;
let imgModels=new schema({
      firstchoice: {
            imgName: {type: String, required: true},
            imgPath: {type: String, required: true},
      },
      secondchoice:{
            imgName: {type: String, required: true},
            imgPath: {type: String, required: true}
      }
})
module.exports=mongoose.model(SchemaName.ImgQuestions,imgModels)