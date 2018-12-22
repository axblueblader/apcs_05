const service=require('../services/BlockService')
exports.BlockUser = async function(req,res,next){
    let userID= req.user._id;
    let blockID= req.body.blockID;
    const result= await service.BlockUser(userID,blockID);
    res.json(result);
}

exports.UnblockUser= async function(req,res,next){
    let userID= req.user._id;
    let unblockID= req.body.unblockID;
    const result= await service.UnblockUser(userID,unblockID);
    res.json(result);
}