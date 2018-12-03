var socketIo = require('socket.io');

const Conversation = require('../pairing-service/Conversation')
var conversations = new Conversation();

const NormalQueue = require('../pairing-service/NormalQueue')
var normalQueue = new NormalQueue();

const SocketManager = require('../pairing-service/SocketManager');
var socketManager= new SocketManager();

const initialize = function (server) {
    var io = socketIo(server);

    io.on('connection', function (socket) {
        
        // Register this SOCKET to USERID
        socket.on('register',(userID)=>{
            console.log(socketManager.addActiveConnection(userID,this));
        })

        socket.on('queue',(userID)=>{
            normalQueue.join(userID);
            // call pairing service
            // socket.emit('queueSuccess')
            // matched
        })

        socket.on('recieved',(userID)=>{
            // socketManager.seenBy(userID)
        })

        

        socket.on('newMessage',(msg)=>{
            console.log('Socket: ',this.id,' sent: ',msg);
            console.log(conversations.deliverMessageFor(this.id,msg));
        })

        socket.on('disconnect',(userID)=>{
            socketManager.removeConnection(userID);
        })
    })        
}

module.exports = initialize;