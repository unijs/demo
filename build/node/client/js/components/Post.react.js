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

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _unijs = require('unijs');

var _unijs2 = _interopRequireDefault(_unijs);

var Blog = (function (_React$Component) {
	_inherits(Blog, _React$Component);

	function Blog() {
		_classCallCheck(this, Blog);

		_get(Object.getPrototypeOf(Blog.prototype), 'constructor', this).call(this);
		this.state = {
			title: '',
			content: ''
		};
	}

	_createClass(Blog, [{
		key: 'loadBlogPost',
		value: function loadBlogPost(id) {
			_superagent2['default'].get('/api/getpost/' + id).accept('application/json').use(_unijs2['default'].superagentPlugin).end((function (err, res) {
				if (err) {
					return this.setState({
						title: '404',
						content: 'Post not Found!'
					});
				}
				this.setState(JSON.parse(res.text));
			}).bind(this));
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadBlogPost(this.props.id);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.id != this.props.id) {
				this.loadBlogPost(nextProps.id);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'h2',
					null,
					this.state.title
				),
				_react2['default'].createElement('br', null),
				_react2['default'].createElement('br', null),
				this.state.content
			);
		}
	}]);

	return Blog;
})(_react2['default'].Component);

Blog = _unijs2['default'].extend(Blog);

exports['default'] = Blog;
module.exports = exports['default'];