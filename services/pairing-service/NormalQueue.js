class NormalQueue {
    constructor(){
        this.userdata_who_waiting = null;
    }

    joinQueue(userdata_who_joining){
        // if there is someone waiting
        if (this.userdata_who_waiting != null){
            // send both of them back
            let tmp_userid = this.userdata_who_waiting.userid
            this.userdata_who_waiting = null
            return {'userid1' : userdata_who_joining.userid, 'userid2' : tmp_userid}
        }
        else{
            // there is no one waiting, make him wait
            this.userdata_who_waiting = userdata_who_joining
            console.log('User in queue: ',this.userdata_who_waiting)
            //return nothing
            return null
        }
    }

    leaveQueue(userid){
        // if he is waiting, then remove him
        if (this.userdata_who_waiting.userid == userid){
            this.userdata_who_waiting = null;
        }
    }
}

module.exports = NormalQueue;
