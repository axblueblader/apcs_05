// Front-end logic that needs to fit with API

$(function () {
    var roomid = '';
    var socket = io();
    console.log(socket);
    var finding = false;

    $('form').submit(function(){
      socket.emit('new message', {
        roomid: roomid,  
        message: $('#m').val()});
      $('#m').val('');
      return false;
    });

    // Can apply state pattern to this shit (Idle,Finding,Matched)
    $('#findMatch').click(function(){
        if (finding == false) {
        socket.emit('find match');
        console.log('Finding a match');
        finding = true;
        $('#messages').append($('<li>').text('Waiting for a match'));
        }
        else $('#messages').append($('<li>').text('Waiting for a match'));
    })

    $('#exitRoom').click(()=> {
        if (roomid != '') {
          console.log('exit ',roomid);
          socket.emit('exit room',{roomid: roomid});

          // This needs to change
          finding = false;
        }
    })

    socket.on('new message', function(msg){
      if (msg == '') return;
      console.log('sent message: ',msg);
      $('#messages').append($('<li>').text(msg));
    });

    socket.on('join room', function(data){
        roomid = data.roomid;
        console.log('Found a match and joined a private room');
        $('#messages').append($('<li>').text('Found a match and joined a private room'));
    })

    socket.on('exit room', function(data) {
      console.log('event: exit room',data);
      roomid = '';
      $('#messages').append($('<li>').text(data.message));
    });
  });