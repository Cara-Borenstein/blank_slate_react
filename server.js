var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.set('port', process.env.PORT || 8080);

app.use(express.static('images'))
app.use(express.static('sitemaps'))

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/blankItems/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(app.get('port'), function() {
      console.log('express server is listening on port ', server.address().port);
});
