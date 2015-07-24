import React from 'react';
import Post from './Post.react';

class BlogPost extends React.Component {
	render() {
		return (
			<Post id={this.context.router.getCurrentParams().id}/>
		);
	}
}

BlogPost.contextTypes = {
	router: React.PropTypes.func
};

export default BlogPost;
