var matchMaker= require('../modules/pairing/Pairing');


exports.findMatch= (req,res,next) => {
    console.log(req.userID);
    var pair = matchMaker.pairing(req.userID);
    if (pair == undefined) {
        res.send("added to queue, waiting for match");
    }
    else {
        res.json(pair);
    }
}