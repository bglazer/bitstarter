var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var index_buffer = fs.readFileSync('index.html');
var index = index_buffer.toString();

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
