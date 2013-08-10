var express = require('express');
var app = express();
app.use(express.logger());

index_buffer = fs.readFileSync('index.html');
index = Buffer.toString(index_buffer);

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
