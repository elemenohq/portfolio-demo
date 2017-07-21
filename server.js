var Elemeno = require('elemeno'),
    express = require('express'),
    pug = require('pug');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('index.pug');
});

app.listen(3000, function () {
	console.log('Portfolio listening on port 3000');
});