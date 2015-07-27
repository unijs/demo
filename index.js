var unijs = require('unijs');
var unijsBuilder = require('unijs-builder');
var express = require('express');
var open = require("open");

var api = require('./api/app.js');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
	console.log("STARTED SERVER! PORT: ", app.get('port'));
});

app.use('/favicon.ico', express.static('./client/img/favicon.ico'));
app.use('/api', api());

var options = {
	debug: true
};

var Server = unijs.Server();

app.use(Server.getMiddleware(options));

var App = Server.App;
App = unijsBuilder.extend(App);

var myDemoApp = new App('myDemoApp');

myDemoApp.head.push('<title>uniJS</title>');
myDemoApp.head.push('<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css">');
myDemoApp.resources.push(__dirname+'/client/css/app.css');
myDemoApp.routesPath = 'client/js/Routes.js';

Server.mount('/', myDemoApp, function finish(err) {
	open("http://localhost:5000/");
});
