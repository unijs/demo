var UniJSnodeReq = require;
var requireTags, require = function(req) {
requireTags = req.split('!');
return UniJSnodeReq(requireTags.pop());
};
require.resolve = UniJSnodeReq.resolve;
'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./Routes.js');
window.onload = function () {
	Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(React.createElement(Handler, null), document.getElementById('main'));
	});
};