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

    deliverMessageFor(socket_id, msg){
        socket = this.Conversations.get(socket_id)
        socket.emit('new message', msg)

        return 'message delivered'
    }
}