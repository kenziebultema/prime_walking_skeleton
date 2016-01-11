/**
 * Created by ulaeulaeulae on 1/9/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './public')));

//
//app.get('/', function(req, res){
//    res.send('Hello');
//});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("listening on port: ", port);
});

app.use(bodyParser.json());
app.use('/', index);

module.exports = app;