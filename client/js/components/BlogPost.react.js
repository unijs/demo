var React = require('react');

var Blog = require('./Blog.react');

var Footer = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	render: function () {
		return (
			<Blog id={this.context.router.getCurrentParams().id}/>
		);
	}
});

module.exports = Footer;
