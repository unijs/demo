import React from 'react';
import superagent from 'superagent';
import unijs from 'unijs';

class Blog extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			content: ''
		};
	}

	loadBlogPost(id) {
		superagent.get('/api/getpost/' + id).accept('application/json').use(unijs.superagentPlugin).end(function(err, res) {
			if (err) {
				return this.setState({
					title: '404',
					content: 'Post not Found!'
				});
			}
			this.setState(JSON.parse(res.text));
		}.bind(this));
	}

	componentDidMount() {
		this.loadBlogPost(this.props.id);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id != this.props.id) {
			this.loadBlogPost(nextProps.id);
		}
	}

	render() {
		return (
			<div>
				<h2>{this.state.title}</h2>
				<br/><br/>
				{this.state.content}
			</div>
		);
	}
}
Blog = unijs.extend(Blog);

export default Blog;
