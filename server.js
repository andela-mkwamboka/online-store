// var products = require('products');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/api/products', function(req, res) {
  res.json(products);
});

app.listen(3000, function() {
  console.log('Running on port 3000');
});