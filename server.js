var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/', function(req, res) {
  res.json('Hello');
});

app.listen(3000, function() {
  console.log('Running on port 3000');
});