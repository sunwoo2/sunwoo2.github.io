var express = require('express');
var app = express();

var path = require('path');

var static = require('serve-static');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/index.html'));
})

app.listen(3000);
