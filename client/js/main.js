var React = require('react');
var Router = require('react-router');
var routes = require('./Routes.js');
window.onload = function() {
	Router.run(routes, Router.HistoryLocation, function(Handler) {
		React.render(<Handler/> , document.getElementById('main'));
	});
};
