var socket = io();
socket.on('connect', function () {
  console.log('Connected to server')
});

socket.on('disconnect', function () {
  console.log('disconnected from socket.io');
});

socket.on('newEmail', function (email) {
  console.log(`New email`,email);
});

socket.emit('createEmail', {
  to:'jen@example.com',
  text: 'Hey,this is Andrew'
});