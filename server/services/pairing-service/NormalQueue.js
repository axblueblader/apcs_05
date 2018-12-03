class NormalQueue {
    constructor(){
        this.queue = new Queue()
    }

    joinQueue(userID){
        this.queue.enqueue(userID)
    }

    //call this function to resolve current queue status
    resolveQueue(){
        while (this.queue.getLength() > 2){
            
        }
    }
}

<<<<<<< HEAD:server/modules/pairing-service/NormalQueue.js
module.exports.NormalQueue
=======
module.exports = NormalQueue;
>>>>>>> 9652c79a4be0b418c916b87be2ed37235ba81ab0:server/services/pairing-service/NormalQueue.js
