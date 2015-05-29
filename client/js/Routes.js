
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
     <Route path="/" name="app" handler={MainApp}>
       <Route path="/blogpostlist" name="blog" handler={BlogPostList}/>
       <Route path="/blogpost/:id" name="blogpost" handler={BlogPost}/>
       <DefaultRoute handler={Body} />
     </Route>
     //<NotFoundRoute handler={Body} />
   </Route>
);

module.exports = routes;
