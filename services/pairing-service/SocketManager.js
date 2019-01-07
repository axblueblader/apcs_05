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

    getIdBySocket(socket){
        let objKeys = Array.from( this.ActiveConnection.keys() );
        let found = objKeys.find(key => this.ActiveConnection.get(key).id == socket.id)
        console.log('found: ',found);
        return found;
    }
}

module.exports = SocketManager;
