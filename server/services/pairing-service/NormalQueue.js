class NormalQueue {
    constructor(){
        userid_who_waiting;
    }

    joinQueue(userid_who_joining){
        // if there is someone waiting
        if (userid_who_waiting != null){
            // send both of them back
            userid_who_waiting = null
            return {'useid1' : userid_who_joining, 'userid2' : userid_who_waiting}
        }
        else{
            // there is no one waiting, make him wait
            userid_who_waiting = userid_who_joining
            //return nothing
            return null
        }
    }

    leaveQueue(userid_who_leaves){
        // if he is waiting, then remove him
        if (this.userid_who_waiting == userid_who_leaves) {
            userid_who_waiting = null;
        }
        return 'leave queue'
    }
}

const _NormalQueue = NormalQueue;
export { _NormalQueue as NormalQueue };
