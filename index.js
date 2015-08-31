var unijs = require('unijs');
var express = require('express');
var open = require("open");

var api = require('./api/app.js');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
	console.log("STARTED SERVER! PORT: ", app.get('port'));
});

app.use('/favicon.ico', express.static('./client/img/favicon.ico'));
app.use('/bundle', express.static('build/web/'));
app.use('/api', api());

var options = {
	debug: true
};

var Server = unijs.Server();

app.use(Server.getMiddleware(options));

var App = Server.App;

var myDemoApp = new App('myDemoApp');

myDemoApp.head.push('<title>UniJS</title>');
myDemoApp.head.push('<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css">');
myDemoApp.resources.push(__dirname+'/client/css/app.css');

myDemoApp.head.push('<script src="/bundle/c0.js" charset="utf-8"></script>');

myDemoApp.Router = require('./build/node/client/js/Routes.js');

Server.mount('/', myDemoApp);
