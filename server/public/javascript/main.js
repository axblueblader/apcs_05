// Front-end logic that needs to fit with API

$(function () {
    var roomid = '';
    var socket = io();
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
        finding = true;
        $('#messages').append($('<li>').text('Waiting for a match'));
        }
        else $('#messages').append($('<li>').text('Waiting for a match'));
    })

    socket.on('new message', function(msg){
      if (msg == '') return;
      $('#messages').append($('<li>').text(msg));
    });

    socket.on('join room', function(data){
        roomid = data.roomid;
        console.log('Found a match and joined a private room');
        $('#messages').append($('<li>').text('Found a match and joined a private room'));
    })
  });