const BlockSchema=require('../schemas/BlockSchema')
const BlockStatus=require('../models/BlockStatus')
exports.BlockUser=async function(userID,blockID)
{
    console.log("RUNNING BLOCK USER")
    let result;
    let blockInfo = await BlockSchema.findOne({userID: userID})

    if (blockInfo)// userID blocked someone else
    {
        console.log("Block List Aready Exist")
        console.log("USER ID: "+ userID)
        console.log(" Original block list: "+blockInfo.blockList)
        if (blockInfo.blockList.includes(blockID)==true) //already blocked
        {
            console.log("Already blocked")
            result={Status: BlockStatus.ALREADY_BLOCKED, blockInfo}
            return result;
        }
        else{
            console.log("Start blocking")
            blockInfo.blockList.push(blockID)
            let newList=blockInfo.blockList
            console.log(newList)
            await blockInfo.update({userID: userID},{$set:{blockList: newList}})
            await blockInfo.save();
            console.log(blockInfo)
            result={Status: BlockStatus.SUCCESSFUL,blockInfo}
            return result;
        }
       

    }
    else
    {//create one
        console.log("Let's create One")
        let newblockInfo= new BlockSchema();
        newblockInfo.userID=userID;
        newblockInfo.blockList.push(blockID);
        await newblockInfo.save();
        result = {Status: BlockStatus.SUCCESSFUL, newblockInfo};
        return result;

    }

}

exports.UnblockUser= async function(userID,unblockID){
    let unblockInfo = await BlockSchema.findOne({userID: userID})
    let result;
    if (unblockInfo)
    {
        console.log(unblockInfo)
        console.log(unblockID)
        console.log(unblockInfo.blockList.includes(unblockID))
        if(unblockInfo.blockList.includes(unblockID)==true){
            
            let index = unblockInfo.blockList.indexOf(unblockID); 
            if (index !== -1) {
                unblockInfo.blockList.splice(index, 1);
                let newList=unblockInfo.blockList
                await unblockInfo.update({userID: userID},{$set:{blockList: newList}})
                await unblockInfo.save();
                result={Status: BlockStatus.SUCCESSFUL,unblockInfo}
                return result;
            }
        }
        else{
            result = {Status: BlockStatus.NOT_FOUND,unblockInfo}
            return result;
        }

    }
    else{
        result={Status: BlockStatus.EMPTY_BLOCKLIST}
        return result;
    }
}

