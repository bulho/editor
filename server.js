var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');


//==================================================================
//EXPRESS SETTINGS
//==================================================================
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(__dirname + '/client/dist'));
app.get('/', function (req, res) { res.sendfile(__dirname + '/index.html'); });


//==================================================================
//SERVER
//==================================================================
var port = process.env.PORT || 3000;
http.createServer(app).listen(port, function () {
    console.log('server listening');
});