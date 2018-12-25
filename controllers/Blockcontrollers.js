const BlockSchema= require('../schemas/BlockSchema')
const service=require('../services/BlockService')
exports.BlockUser = async function(req,res,next){
    let userID= req.body.userID;
    let blockID= req.body.blockID;
    const result= await service.BlockUser(userID,blockID);
    res.json(result);
}

exports.UnblockUser= async function(req,res,next){
    let userID= req.body.userID;
    let unblockID= req.body.unblockID;
    const result= await service.UnblockUser(userID,unblockID);
    res.json(result);
}