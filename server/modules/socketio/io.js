var socketIo = require('socket.io');

var connections = {};

var queue = require('./io.queue');

const initialize = function (server) {
    var io = socketIo(server);

    console.log(queue);

    io.on('connection', function (socket) {
        connections[socket.id] = socket;
        var match = undefined;

        socket.on('find match', function () {
            
            if (queue.length() == 0) {
                queue.push(this.id);
                console.log(queue);
            }
            else {
                // match with first person in queue
                match = queue.pop();

                // generate unique room id
                var roomid = match + socket.id;
                console.log(roomid);

                socket.join(roomid);
                connections[match].join(roomid);
                connections[match].emit('join room',{roomid: roomid});
                socket.emit('join room', { roomid: roomid });

            }
            console.log('Current queue:',queue);
        })

        // Server emit message to room on "new message" event
        socket.on('new message', function (data) {
            if (data.roomid == '') return;
            io.to(data.roomid).emit('new message',data.message);
        })
    })
}

module.exports = initialize;