

class QueueManager{
    constructor(){
        quickQueue = new NormalQueue();
    }

    joinQueue(data){
        //TODO change this later
        return this.quickQueue.joinQueue(data.userid)
    }

    leaveQueue(data){
        //TODO change this later
        return this.quickQueue.leaveQueue(data.userid)
    }
}