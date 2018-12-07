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

    leaveQueue(data){
        let ret = undefined
        switch (data.queueType){
            case 'quick':
                ret = this.quickQueue.leaveQueue(data)
                break
            case 'malemale':
                ret = this.maleMaleQueue.leaveQueue(data)
                break
            case 'femalefemale':
                ret = this.femaleFemaleQueue.leaveQueue(data)
                break
            case 'malefemale':
            case 'femalemale':
                ret = this.maleFemaleQueue.leaveQueue(data)
        }

        return ret
    }
}

module.exports = QueueManager;