var socket = io();

socket.on('connect', function() {
  console.log("Connected to server.");

  socket.emit('createMessage', {
    from: 'Nate',
    text: 'Hello from the client'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (newMessage) { 
  console.log('Message:', newMessage);
});