var socketIo = require('socket.io');


const SocketManager = require('../pairing-service/SocketManager');
var socketManager= new SocketManager();

const Conversation = require('../pairing-service/Conversation')
var conversations = new Conversation(socketManager);
var normalQueue = new normalQueue();


const initialize = function (server) {
    var io = socketIo(server);

    io.on('connection', function (socket) {
        
        // Register this SOCKET to USERID
        socket.on('register',(userID)=>{
            console.log(socketManager.addActiveConnection(userID,this));
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
            }
            else{
                // waiting in queue
                socket.emit('waiting in queue')
            }
        })

        socket.on('stop search',(userID)=>{
            normalQueue.leaveQueue(userID);
        })

        socket.on('message recieved',(userID)=>{
            conversations.seenBy(userID);
        })

        socket.on('send message',(msg)=>{
            console.log('Socket: ',this.id,' sent: ',msg);
            console.log(conversations.deliverMessageFor(this.id,msg));
        })

        socket.on('leave chat',(userID) => {
            console.log(conversations.userLeaveChat(userID));
        })

        socket.on('disconnect',(userID)=>{
            normalQueue.leaveQueue(userID);
            socketManager.removeConnection(userID);
        })
    })        
}

module.exports = initialize;