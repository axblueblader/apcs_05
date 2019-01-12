const NormalQueue = require('./NormalQueue')
const MaleFemaleQueue = require('../pairing-service/MaleFemaleQueue')

class QueueManager{
    constructor(){
        this.quickQueue = new NormalQueue();
        this.maleMaleQueue = new NormalQueue();
        this.femaleFemaleQueue = new NormalQueue();
        this.maleFemaleQueue = new MaleFemaleQueue();
    }

    joinQueue(data){
        let ret = undefined
        switch (data.queueType){
            case 'quick':
                ret = this.quickQueue.joinQueue(data)
                break
            case 'malemale':
                ret = this.maleMaleQueue.joinQueue(data)
                break
            case 'femalefemale':
                ret = this.femaleFemaleQueue.joinQueue(data)
                break
            case 'malefemale':
            case 'femalemale':
                ret = this.maleFemaleQueue.joinQueue(data)
        }

        return ret
    }

    leaveQueue(userid){
        console.log('User is leaving queue: ',userid);
        this.quickQueue.leaveQueue(userid)
        this.maleFemaleQueue.leaveQueue(userid)
        this.femaleFemaleQueue.leaveQueue(userid)
        this.maleMaleQueue.leaveQueue(userid)
        return 'leave queue'
    }
}

module.exports = QueueManager;