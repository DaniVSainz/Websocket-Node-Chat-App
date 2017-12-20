var socket = io();



socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'Andrew',
  //   text: 'Yup,that works for me'
  // });
});

socket.on('disconnect', function () {
  console.log('disconnected from socket.io');
});

// socket.on('newEmail', function (email) {
//   console.log(`New email`,email);
// });

// socket.emit('createEmail', {
//   to:'jen@example.com',
//   text: 'Hey,this is Andrew'
// });


socket.on('newMessage', function(message) {
  console.log('newMessage',message);
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'hi'
}, function(data){
  console.log('Response Received:',data);
}); 