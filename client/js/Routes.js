var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var MainApp = require('./components/MainApp.react');
var Body = require('./components/Body.react');
var BlogPost = require('./components/BlogPost.react');
var BlogPostList = require('./components/BlogPostList.react');


var routes = (
		<Route name="main" path="/">
			<Route handler={MainApp} name="app" path="/">
				<Route handler={BlogPostList} name="blog" path="/blogpostlist"/>
				<Route handler={BlogPost} name="blogpost" path="/blogpost/:id"/>
			</Route>
		</Route>
);

//<DefaultRoute handler={Body} />
//<NotFoundRoute handler={Body} />
module.exports = routes;
