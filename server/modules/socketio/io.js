var socketIo = require('socket.io');

var connections = {};

var queue = require('./io.queue');

const initialize = function (server) {
    var io = socketIo(server);

    io.on('connection', function (socket) {
        connections[socket.id] = socket;
        var match = undefined;

        // Match active users or put them in queue
        socket.on('find match', function () {

            if (queue.length() == 0) {
                queue.push(this.id);
            }
            else {
                // match with first person in queue
                match = queue.pop();

                // generate unique room id
                var roomid = match + "#" + socket.id;
                console.log(roomid);

                socket.join(roomid);
                connections[match].join(roomid);
                connections[match].emit('join room', { roomid: roomid });
                socket.emit('join room', { roomid: roomid });

            }
            console.log('Current queue:', queue);
        })

        // Server emit message to room on "new message" event
        socket.on('new message', function (data) {
            if (data.roomid == '') return;
            io.to(data.roomid).emit('new message', data.message);
        })


        socket.on('exit room', function (data) {
            if (data.roomid == '') return;
            var sockIds = data.roomid.split("#");
            console.log(sockIds);

            // Leave room and emit 'exit room' to both user
            connections[sockIds[0]].leave(data.roomid);
            connections[sockIds[0]].emit('exit room',{message: 'Left room'});
            connections[sockIds[1]].leave(data.roomid);
            connections[sockIds[1]].emit('exit room',{message: 'Left room'});
        })
    })
}

module.exports = initialize;