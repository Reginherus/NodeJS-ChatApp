const path = require('path');
require('../config/config');

const publicPath = path.join(__dirname, '../public');

const express = require('express');

var app = express();

app.use(express.static(publicPath));

app.get('/', () => {
    res.render('index.html');
});


app.listen(process.env.PORT, () => {
    console.log(`Server has started on port: ${process.env.PORT}`)
})