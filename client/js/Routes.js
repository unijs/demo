import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import Main from './components/Main.react';
import Home from './components/Home.react';
import BlogPost from './components/BlogPost.react';

var routes = (
	<Route handler={Main} name="main" path="/">
			<Route handler={BlogPost} name="blogpost" path="/:id"/>
			<DefaultRoute handler={Home} />
	</Route>
);

export default routes;
