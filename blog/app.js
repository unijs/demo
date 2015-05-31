var express = require('express');
//var BlogPost = require('./BlogPost.js');

var initializeDatabase = function() {
	BlogPost.find(function(err, number) {
		if (err || !number) {
			console.error('Could find number of posts!');
		} else {
			if (number < 1) {
				var post1 = new BlogPost({
					title: 'INITIAL POST',
					content: 'This is my first blogpost ever. So please do not blame on me too much ;-).'
				});
				var post2 = new BlogPost({
					title: 'REACT.JS',
					content: 'I just wanna say, that React.js is the best JS framework I have ever seen! Please use it!'
				});
				var post3 = new BlogPost({
					title: 'ISOJS FOREVER',
					content: 'Hoping you like isoJS and will use it in your next project ;-).'
				});
				post1.save(function(err, post) {
					if (err) return console.error('error when saving post1', err);
					console.log('saved post1: ', post);
				});
				post2.save(function(err, post) {
					if (err) return console.error('error when saving post2', err);
					console.log('saved post2: ', post);
				});
				post3.save(function(err, post) {
					if (err) return console.error('error when saving post3', err);
					console.log('saved post3: ', post);
				});
			}
		}
	}).limit(1).count();
}


var post1 = {
	_id: 'IDeins',
	title: 'INITIAL POST',
	content: 'This is my first blogpost ever. So please do not blame on me too much ;-).'
};
var post2 = {
	_id: 'IDzwei',
	title: 'REACT.JS',
	content: 'I just wanna say, that React.js is the best JS framework I have ever seen! Please use it!'
};
var post3 = {
	_id: 'IDdrei',
	title: 'ISOJS FOREVER',
	content: 'Hoping you like isoJS and will use it in your next project ;-).'
};

var posts = {};
posts[post1._id] = post1;
posts[post2._id] = post2;
posts[post3._id] = post3;

//initializeDatabase();

module.exports = function() {

	var app = express();

	/*app.use(function(req, res, next){
		console.log('head', req.headers);
		next();
	});*/

	app.get('/getpost/:id', function(req, res) {
		if (req.params != null && req.params.id != null) {
			var id = req.params.id;

			if (!posts[id]) {
				console.error('Could not find post (' + id + ')');
				res.status(404).send('Could not find post!');
			} else {
				res.json(posts[id]);
			}
			/*BlogPost.findOne({
				_id: id
			}, function(err, post) {
				if (err || !post) {
					console.error('Could not find post (' + id + ')');
					res.status(404).send('Could not find post!');
				} else {
					res.json(post);
				}
			});*/
		}
	});

	app.get('/getposts/:max', function(req, res) {
		if (req.params != null && req.params.max != null) {
			var max = req.params.max;
			var out = [];
			for(var i in posts){
				out.push(posts[i]);
			}
			res.json(out);
			/*BlogPost.find(function(err, posts) {
				if (err || !posts) {
					console.error('Could not find post (' + id + ')');
					res.status(404).send('Could not find post!');
				} else {
					res.json(posts);
				}
			}).limit(max);*/
		}
	});

	app.get('/getmenu', function(req, res) {
		var out = [];
		for(var i in posts){
			var po = {};
			po._id = posts[i]._id;
			po.title = posts[i].title;
			out.push(po);
		}
		res.json(out);
		/*BlogPost.find(function(err, posts) {
			if (err || !posts) {
				console.error('Could not find post (' + id + ')');
				res.status(404).send('Could not find post!');
			} else {
				res.json(posts);
			}
		}).limit(3).select('_id title');*/
	});

	return app;
};