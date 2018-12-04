// Front-end logic that needs to fit with API

$(function () {
  var inChat = false;
  var socket = io();
  var finding = false;
  
  // register socket into manager
  var userid = undefined;

  console.log(socket);

  socket.emit('get token');
  socket.on('recieve token', (token) => {
    console.log("Token: ", token);
    userid = token;
    socket.emit('register', userid);
  })

  $('#sendMess').click(function () {
    if (inChat == true) {
      $('#messages').append($('<li>').text($('#m').val()))
      socket.emit('send message', {
        'userid': userid,
        'msg': $('#m').val()
      });
      $('#m').val('');
    }
  });

  // Can apply state pattern to this shit (Idle,Finding,Matched)
  $('#findMatch').click(function () {
    if (finding == false) {
      socket.emit('start search', {
        'userid': userid,
        'queueType': 'quick'
      });
      console.log('Finding a match');
      finding = true;
      $('#messages').append($('<li>').text('Waiting for a match'));
    }
    else $('#messages').append($('<li>').text('Waiting for a match'));
  })

  $('#exitRoom').click(() => {
    if (inChat == true) {
      console.log('Leaving chat');
      socket.emit('leave chat', userid);
      inChat = false;
      $('#messages').append($('<li>').text('You have left the chat'));
    }
    else  {
      console.log('Disconnecting');
      socket.emit('disconnect',userid);
    }
    // This needs to change
    finding = false;
  })

  socket.on('new message', function (msg) {
    if (msg == '') return;
    console.log('recieved message: ', msg);
    $('#messages').append($('<li>').text(msg));
    socket.emit('message recieved',userid);
  });

  socket.on('found match', function (data) {
    inChat = true;

    console.log('Found a match and joined a private room');
    $('#messages').append($('<li>').text('Found a match and joined a private room'));
  })

  socket.on('message seen',function() {
    console.log('Message has been seen');
  })

  socket.on('left chat', function (data) {
    console.log('User has left the chat');
    inChat = false;
    // This needs to change
    finding = false;
    $('#messages').append($('<li>').text('Other user has left the chat'));
  });
});