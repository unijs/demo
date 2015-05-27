
var React = require('react');
var superagent = require('superagent');
var isojs = require('isojs');

var Blog = React.createClass({
	mixins: [isojs.loadMixin, isojs.stateMixin],

	isojsInitialState: function(){
		return { title: '', content: '' };
	},

	loadBlogPost: function(id){
		superagent
		.get('/blog/getpost/'+id)
		.accept('application/json')
		.use(isojs.superagentPlugin)
		.end(function(err, res){
			if(err){
				this.setState({ title: '404 ERROR', content: 'Could not find Post!' });;
				return console.error('FAIL', err);
			}
			this.setState(JSON.parse(res.text));
		}.bind(this));
	},

	componentDidMount: function(){
		this.loadBlogPost(this.props.id);
	},
	componentWillReceiveProps: function(nextProps) {
		if(nextProps.id != this.props.id){
			this.loadBlogPost(nextProps.id);
			}
	},
	render: function() {
		return (
			<div className={'wrap'}>
				<div style={{'textAlign': 'justify'}}>
					<h1>{this.state.title}</h1>
					<br/><br/>
					{this.state.content}
				</div>
			</div>
		);
	}

});

module.exports = Blog;
