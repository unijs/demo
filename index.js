var isojs = require('isojs');
var express = require('express');
var mongoose = require('mongoose');

//var routes = require('./js/Routes.js');
var blog = require('./blog/app.js');

var app = express();

// Loading Database:
//var db = mongoose.connect('mongodb://localhost/isojs-demo');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
	console.log("STARTED SERVER! PORT: ", app.get('port'));
});

app.use(function(req, res, next) {
	console.log('header', req.headers);
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));
app.use('/font', express.static('./client/font'));
app.use('/img', express.static('./client/img'));
app.use('/favicon.ico', express.static('./client/img/favicon.ico'));

app.use('/blog', blog());

var config = {
	routesPath: 'client/js/Routes.js',
	getApiServerAddress: function() {
		return 'http://localhost:' + app.get('port') + '/';
	},
	uglify: true, // Switch this to false for easier client side debugging
	debug: true,
	head: '<title>isoJS</title><link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css"><link rel="stylesheet" href="/css/app.css"/>'
};

isojs.checkLocation.setServer();
var isoJSapp = isojs.appBuilder(config);

app.use(isoJSapp());
