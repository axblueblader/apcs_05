const LinkedList = require('../pairing-service/LinkedList')

class MaleFemaleQueue {
    constructor(){
        //queue
        this.waitingQueue = new LinkedList()
        //current queue type
        this.queueType = undefined
    }

    joinQueue(data){
        //chekc if data is in the correct queue
        if (data.queueType != 'malefemale' && data.queueType != 'femalemale'){
            return null
        }

        let ret = null

        //if the queue is empty
        if (this.queueType == undefined){
            this.queueType = data.queueType
            this.waitingQueue.addToTail(data.userid)
        }
        //if the enqueue is the same type
        else if (this.queueType == data.queueType){
            this.waitingQueue.addToTail(data.userid)
        }
        // if the enqueue is the different type
        else{
            let tmp_userid = this.waitingQueue.popHead()

            if (this.waitingQueue.isEmpty()) {
                this.queueType = undefined
            }

            ret = {'userid1' : data.userid, 'userid2' : tmp_userid}
        }

        return ret
    }

    leaveQueue(userid){
        //remove the user from the queue
        this.waitingQueue.remove(userid)
    }
}

module.exports = MaleFemaleQueue