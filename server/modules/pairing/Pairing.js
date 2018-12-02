
var queue = [];

exports.pairing = (userID) =>{
    if (queue.length == 0) {
        enqueueNormal(userID,queue);
        return undefined;
    }
    else {
        // return a pair
        return {'user1': userID,'user2': queue.pop};
    }
}

function enqueueNormal(userID,queue) {
    queue.push(userID);
}




