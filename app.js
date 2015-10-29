var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello Sureh jenkins deployment test');
});

app.listen(process.env.PORT || 6000);

module.exports = app;
