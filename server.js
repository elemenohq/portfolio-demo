var Elemeno = require('elemeno'),
    express = require('express'),
    pug = require('pug');

var app = express();
var elemeno = new Elemeno('PASTE-ACCESS-TOKEN-HERE');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	elemeno.getCollectionItems('portfolio', function(err, response) {
		res.render('index.pug', {projects: response.data});
	});
});

app.get('/view/:slug', function(req, res) {
	var slug = req.params.slug;

	elemeno.getCollectionItem('portfolio', slug, function(err, response) {
		if (err) {
			return res.render('404.pug');
		}
		
		res.render('details.pug', {project: response.data});
	});
});

app.listen(3000, function () {
	console.log('Portfolio listening on port 3000');
});