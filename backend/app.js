// Express
var express = require('express');
var app = express();
PORT = 3000;

// ROUTES
app.get('/', function (req, res) {
  res.send('Sever running.');
});

// LISTENER
app.listen(PORT, function () {
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});
