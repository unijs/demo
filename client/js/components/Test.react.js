
import React from 'react';

class Blog extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
			</div>
		);
	}
}

export default Blog;

// Render in another component
<Blog title="Test"></Blog>

// Render into a div
React.render(<Blog title="Test" /> , document.getElementById('main'));

// Render and get an HTML string
var html = React.renderToString(Blog({title: "Test"}));
