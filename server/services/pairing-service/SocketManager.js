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
    
    socketOfUser(userID){
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

<<<<<<< HEAD:server/modules/pairing-service/SocketManager.js
module.exports.SocketManager
=======
module.exports = SocketManager;
>>>>>>> 9652c79a4be0b418c916b87be2ed37235ba81ab0:server/services/pairing-service/SocketManager.js
