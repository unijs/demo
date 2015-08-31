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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuReact = require('./Menu.react');

var _MenuReact2 = _interopRequireDefault(_MenuReact);

var _reactRouter = require('react-router');

var Main = (function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Main, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ style: { textAlign: 'center', fontFamily: 'Helvetica, Arial' } },
				_react2['default'].createElement(
					'a',
					{ href: '/' },
					_react2['default'].createElement('img', { height: '100', src: 'https://avatars0.githubusercontent.com/u/13003405?v=3&s=200', width: '100' })
				),
				_react2['default'].createElement('br', null),
				_react2['default'].createElement(
					'h1',
					null,
					'UniJS Demo'
				),
				_react2['default'].createElement(_MenuReact2['default'], null),
				_react2['default'].createElement('br', null),
				_react2['default'].createElement('hr', { style: { border: '0', height: '1px', background: '#e2e2e2' } }),
				_react2['default'].createElement(_reactRouter.RouteHandler, null)
			);
		}
	}]);

	return Main;
})(_react2['default'].Component);

exports['default'] = Main;
module.exports = exports['default'];