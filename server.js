const app = require('./app');

const server = require('http').createServer(app);

const port = process.env.PORT || 3000;

const io = require('./services/socketio/io.new');

io(server);

server.listen(port,function(){
    console.log('Express is listening to port:',port);
});