var socketIo = require('socket.io');

const Conversation = require('../pairing-service/Conversation')
var conversations = new Conversation();

//const NormalQueue = require('../pairing-service/NormalQueue')


const SocketManager = require('../pairing-service/SocketManager');
var socketManager= new SocketManager();

const initialize = function (server) {
    var socketHolder = {};
    var io = socketIo(server);

    io.on('connection', function (socket) {
        
        // Register this SOCKET to USERID
        socket.on('register',(userID)=>{
            console.log(socketManager.addActiveConnection(userID,this));
        })

        // Matched emit when user choose to join chat after quiz
        socket.on('matched',(pair)=>{
            // Dummy API
            let id1 = pair.userID1;
            let id2 = pair.userID2;        
            console.log('Matching: ',pair);
            console.log(conversations.newConversation(id1,id2));
        })

        socket.on('newMessage',(msg)=>{
            console.log('Socket: ',this.id,' sent: ',msg);
            console.log(conversations.deliverMessageFor(this.id,msg));
        })
    }        
}

module.exports = initialize;