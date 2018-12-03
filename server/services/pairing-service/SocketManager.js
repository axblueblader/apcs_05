class SocketManager{
    constructor(){
        this.ActiveConnection = new Map()
    }

    addActiveConnection(userID, socketID){
        //if the map did not has this user token
        var ret;
        if (!this.ActiveConnection.has(userID)){
            this.ActiveConnection.set(userID, socketID)
            ret = 'sucess'
        }
        else{
        //already there
            ret = 'existed'
        }
        return ret;
    }

    removeConnection(userID){
        var ret;
        if (this.ActiveConnection.has(userID)){
            this.ActiveConnection.delete(userID)
            ret = 'sucess'
        }
        else{
            ret = 'not exist'
        }
        return ret
    }
    
    getSocketByID(userID){
        var ret;
        if (this.ActiveConnection.has(userID)){
            ret = this.ActiveConnection.get(userID)
        }
        else {
            ret = null
        }
        return ret
    }
}

const _SocketManager = SocketManager;
export { _SocketManager as SocketManager };
