const mongoose=require('mongoose');
const schemaname=require('../schemas/SchemaNames')
let schema= mongoose.Schema;

let blockschema=new schema({
    userID: {type: String, required: true},
    blockList:[{
        type:String
    }],
    date_created: {type: Date, default: Date.now}
})

module.exports=mongoose.model(schemaname.BlockSchema,blockschema)
