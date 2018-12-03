//noob implementation

class Conversation{
    constructor(){
        this.Conversations = new Map();
    }

    newConversation(socket1, socket2){
        //map the user to the socket by the other user

        this.Conversations.set(socket1.id, socket2)
        this.Conversations.set(socket2.id, socket1)
        
        return 'Conversation added'
    }

    removeConversation(socket_id1, socket_id2){
        this.Conversations.delete(socket_id1)
        this.Conversations.delete(socket_id2)

        return 'Conversation deleted'
    }

    deliverMessageFor(sender_socket_id, msg){
        socket = this.Conversations.get(sender_socket_id)
        socket.emit('new message', msg)

        return 'message delivered'
    }
<<<<<<< HEAD:server/modules/pairing-service/Conversation.js

    messageSeen(sender_socket_id){
        socket = this.Conversations.get(sender_socket_id);
        socket.emit('message seen')

        return 'seen message sent'
    }
}

module.exports.Conversation
=======
}

module.exports = Conversation;
>>>>>>> 9652c79a4be0b418c916b87be2ed37235ba81ab0:server/services/pairing-service/Conversation.js
