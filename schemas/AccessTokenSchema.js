const mongoose=require('mongoose')
const schemaname=require('./SchemaNames')
let schema = mongoose.Schema;
let tokenschema=new schema({
  userID: { type: String, required: true },
    token: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model(schemaname.AccessTokenSchema,tokenschema)