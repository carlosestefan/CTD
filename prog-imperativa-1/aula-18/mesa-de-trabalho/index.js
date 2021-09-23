const express = require('express');

const app = new express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/mesa.html');
})

app.listen(4567);