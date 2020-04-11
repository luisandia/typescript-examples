var express = require('express');
var app = express();
var path = require('path');
var SystemJS = require('systemjs');

SystemJS.import('./main.js')
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);