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

module.exports.NormalQueue