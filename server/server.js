const path = require('path');
const http = require('http');
require('../config/config');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');


var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));


io.on('connection', (socket) => {
	console.log('New User Connected');

	socket.on('disconnect', () => {
		console.log('Client disconnected.')
	});
});



app.get('/', () => {
	res.render('index.html');
});


server.listen(process.env.PORT, () => {
	console.log(`Server has started on port: ${process.env.PORT}`)
})