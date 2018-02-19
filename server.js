var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var fileManager = require('./file-manager');


//==================================================================
//EXPRESS SETTINGS
//==================================================================
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(__dirname + '/client/dist'));
app.get('/', function (req, res) { res.sendfile(__dirname + '/index.html'); });

//==================================================================
//API's
//==================================================================
app.post('/getProject', function (req, res) {
    fileManager.getProject(req.body.id).then(function (d) {
        res.send(d);
    }).then(function (reason) {
        res.send(reason);
    });
});

app.post('/order', function (req, res) {
    fileManager.logOrder(req.body).then(function (d) {
        res.send(d);
    }).then(function (reason) {
        res.send(reason);
    });
});

//==================================================================
//SERVER
//==================================================================
var port = process.env.PORT || 3000;
http.createServer(app).listen(port, function () {
    console.log('server listening');
});