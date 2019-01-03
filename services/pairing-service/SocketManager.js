class SocketManager{
    constructor(){
        this.ActiveConnection = new Map()
    }

    addActiveConnection(userid, socket){
    
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
}

module.exports = SocketManager;
