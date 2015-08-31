var UniJSnodeReq = require;
var requireTags, require = function(req) {
requireTags = req.split('!');
return UniJSnodeReq(requireTags.pop());
};
require.resolve = UniJSnodeReq.resolve;
'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsMainReact = require('./components/Main.react');

var _componentsMainReact2 = _interopRequireDefault(_componentsMainReact);

var _componentsHomeReact = require('./components/Home.react');

var _componentsHomeReact2 = _interopRequireDefault(_componentsHomeReact);

var _componentsBlogPostReact = require('./components/BlogPost.react');

var _componentsBlogPostReact2 = _interopRequireDefault(_componentsBlogPostReact);

var routes = _react2['default'].createElement(
		_reactRouter.Route,
		{ handler: _componentsMainReact2['default'], name: 'main', path: '/' },
		_react2['default'].createElement(_reactRouter.Route, { handler: _componentsBlogPostReact2['default'], name: 'blogpost', path: '/:id' }),
		_react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeReact2['default'] })
);

exports['default'] = routes;
module.exports = exports['default'];