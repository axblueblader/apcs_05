//noob implementation

class Conversation {
    constructor(_SocketManager) {
        this.Conversations = new Map();
        this.socketManager = _SocketManager;
    }

    newConversation(userid1, userid2) {
        //map the user to the socket by the other user

        this.Conversations.set(userid1, userid2)
        this.Conversations.set(userid2, userid1)

        return 'Conversation added'
    }

    removeConversation(userid1, userid2) {
        this.Conversations.delete(userid1)
        this.Conversations.delete(userid2)

        return 'Conversation deleted'
    }

    userLeaveChat(userid_who_leaves) {
        // get the other user
        let other_user = this.Conversations.get(userid_who_leaves)

        //get the other user socket
        let socket = this.socketManager.getSocketByID(other_user)

        // emit event left chat
        socket.emit('left chat', userid_who_leaves, function (ack) {
            console.log(ack);
        });

        //remove the conversation
        console.log(this.removeConversation(userid_who_leaves, other_user));
    }

    deliverMessageFor(sender_userid, msg) {
        // get the other user
        let recv_userid = this.Conversations.get(sender_userid)

        //get the other user socket
        let socket = this.socketManager.getSocketByID(recv_userid)

        // send message to other user
        console.log('Recieving socket:', socket.id)

        socket.emit('new message', msg)

        return 'message delivered'
    }

    messageSeenByUser(userid_who_seen) {
        // get the message sender
        let sender_userid = this.Conversations.get(userid_who_seen)

        // get the sender socket
        let socket = this.socketManager.getSocketByID(sender_userid)

        //emit event to the sender
        socket.emit('message seen', userid_who_seen)

        return 'seen message sent'
    }
}

module.exports = Conversation;

