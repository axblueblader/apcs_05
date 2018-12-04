// Front-end logic that needs to fit with API

$(function () {
    var roomid = '';
    var socket = io();
    var finding = false;

    // Dummy test
    const userid = 'viet'

    // register socket into manager
    socket.emit('register',userid);

    $('form').submit(function(){
      socket.emit('send message', $('#m').val());
      $('#messages').append($('<li>').text($('#m').val()))
      $('#m').val('');
      return false;
    });

    // Can apply state pattern to this shit (Idle,Finding,Matched)
    $('#findMatch').click(function(){
        if (finding == false) {
        socket.emit('start search',{
          'userid': userid,
          'queueType': 'quick'
        });
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
      console.log('recieved message: ',msg);
      $('#messages').append($('<li>').text(msg));
    });

    socket.on('found match', function(data){
        //roomid = data.roomid;
        console.log('Found a match and joined a private room');
        $('#messages').append($('<li>').text('Found a match and joined a private room'));
    })

    socket.on('exit room', function(data) {
      console.log('event: exit room',data);
      roomid = '';
      $('#messages').append($('<li>').text(data.message));
    });
  });