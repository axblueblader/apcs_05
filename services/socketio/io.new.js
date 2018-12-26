var socketIo = require('socket.io');

const SocketManager = require('../pairing-service/SocketManager');
var socketManager= new SocketManager();

const Conversation = require('../pairing-service/Conversation')
var conversations = new Conversation(socketManager);

const QueueManager = require('../pairing-service/QueueManager')
var queueManager = new QueueManager();

const TokenGenerator = require('../authentication-service/TokenGenerator')
var tokenGen = new TokenGenerator();

const initialize = function (server) {
    var io = socketIo(server);

    io.on('connection', function (socket) {
        
        socket.on('get token',()=>{
            socket.emit('recieve token',tokenGen.getToken());
        })

        // Register this SOCKET to USERID
        socket.on('register',(userID)=>{
            console.log('Registering :',userID);
            console.log(socketManager.addActiveConnection(userID,socket));
        })

        /*
            data {
                'userid': userid,
                'queueType': quick | malemale | malefemale | femalemale | femalefemale
            }
        */
        socket.on('start search',(data)=>{
            pair = queueManager.joinQueue(data);
            // call pairing service
            if (pair != null) {
                // if match success, pair will be a pair of userid from pairing serive
                conversations.newConversation(pair.userid1,pair.userid2);
                console.log(pair);
                let socket1 = (socketManager.getSocketByID(pair.userid1))
                socket1.emit('found match');
                let socket2 = (socketManager.getSocketByID(pair.userid2))
                socket2.emit('found match');
            }
            else{
                // waiting in queue
                socket.emit('waiting in queue');
            }
        })

        socket.on('stop search',(userID)=>{
            queueManager.leaveQueue(userID);
        })

        socket.on('message recieved',(userID)=>{
            // inside: emit('message seen',userid_who_seen)
            conversations.messageSeenByUser(userID);
        })

        socket.on('send message',(data)=>{
            console.log(data);
            console.log('User: ',data.userid,' sent: ',data.msg);
            // inside: emit('new message',msg);
            console.log(conversations.deliverMessageFor(data.userid,data.msg));
        })

        socket.on('leave chat',(userID) => {
            // inside: emit('left chat',userid_who_leaves)
            conversations.userLeaveChat(userID);
        })

        socket.on('disconnect',()=>{
            let userID = socketManager.getIdBySocket(socket)
            queueManager.leaveQueue(userID)
            socketManager.removeConnection(userID)
        })
        socket.on('manual disconnect',(userID)=>{
            queueManager.leaveQueue(userID);
            socketManager.removeConnection(userID);
        })
    })        
}

module.exports = initialize;