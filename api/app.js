var express = require('express');

var post1 = {
	_id: 'ID_ONE',
	title: 'INITIAL POST',
	content: 'This is my first blogpost ever. So please do not blame on me too much ;-).'
};
var post2 = {
	_id: 'ID_TWO',
	title: 'REACT.JS',
	content: 'I just wanna say, that React.js is the best JS framework I have ever seen! Please use it!'
};
var post3 = {
	_id: 'ID_THREE',
	title: 'UNIJS FOREVER',
	content: 'Hoping you like uniJS and will use it in your next project ;-).'
};

var posts = {};
posts[post1._id] = post1;
posts[post2._id] = post2;
posts[post3._id] = post3;

module.exports = function () {

	var app = express();

	app.get('/getpost/:id', function (req, res) {
		if (req.params != null && req.params.id != null) {
			var id = req.params.id;

			if (!posts[id]) {
				console.error('Could not find post (' + id + ')');
				res.status(404).send('Could not find post!');
			} else {
				res.json(posts[id]);
			}
		}
	});

	app.get('/getmenu', function (req, res) {
		var out = [];
		for (var i in posts) {
			var po = {};
			po._id = posts[i]._id;
			po.title = posts[i].title;
			out.push(po);
		}
		res.json(out);
	});

	return app;
};
