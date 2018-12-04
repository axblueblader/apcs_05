class NormalQueue {
    constructor(){
        this.userid_who_waiting = undefined;
    }

    joinQueue(userid_who_joining){
        // if there is someone waiting
        if (this.userid_who_waiting != undefined){
            // send both of them back
            let tmp_userid = this.userid_who_waiting
            this.userid_who_waiting = undefined
            return {'userid1' : userid_who_joining, 'userid2' : tmp_userid}
        }
        else{
            // there is no one waiting, make him wait
            this.userid_who_waiting = userid_who_joining
            console.log('User in queue: ',this.userid_who_waiting)
            //return nothing
            return undefined
        }
    }

    leaveQueue(userid_who_leaves){
        // if he is waiting, then remove him
        if (this.userid_who_waiting == userid_who_leaves) {
            this.userid_who_waiting = undefined;
        }
        return 'leave queue'
    }
}

module.exports = NormalQueue;
