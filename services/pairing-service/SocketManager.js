class SocketManager{
    constructor(){
        this.ActiveConnection = new Map()
    }

    addActiveConnection(userid, socket){
        //if the map did not has this user token
        /*let ret = 'existed';
        if (!this.ActiveConnection.has(userid)){
            this.ActiveConnection.set(userid, socketID)
            ret = 'success'
        }

        return ret;*/

        this.ActiveConnection.set(userid, socket)
        //console.log(this.ActiveConnection);
        return 'active connection added'
    }

    removeConnection(userid){
        let ret = 'not exist';
        if (this.ActiveConnection.has(userid)){
            this.ActiveConnection.delete(userid)
            ret = 'success'
        }
        return ret
    }
    
    getSocketByID(userid){
        let ret = undefined;
        if (this.ActiveConnection.has(userid)){
            ret = this.ActiveConnection.get(userid)
        }
        return ret
    }

    getIdBySocket(socket){
        return Object.keys(ActiveConnection).find(key => ActiveConnection[key] === socket)
    }
}

module.exports = SocketManager;
