var socket = io();

socket.on('connect', function() {
  console.log("Connected to server.");
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) { 
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template, {
    message: message.text,
    from: message.from,
    createdAt: moment(message.createdAt).format('h:mm a')
  });

  jQuery('#message').append(html);
});

socket.on('newLocationMessage', function (message) {
  var template = jQuery('#location-message-template').html();
  var html = Mustache.render(template, {
    from: message.from,
    createdAt: moment(message.createdAt).format('h:mm a'),
    url: message.url
  });
  
  jQuery('#message').append(html);
})

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]')

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {
    jQuery('[name]').val('');
  });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send Location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function () {
    alert('Unable to fetch location');
    locationButton.removeAttr('disabled').text('Send Location');
    }, {
      enableHighAccuracy: true
      , timeout: 5000
    });
});