
var React = require('react');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

var superagent = require('superagent');
var isojs = require('isojs');


var BlogPostList = React.createClass({
   mixins: [isojs.loadMixin, isojs.stateMixin],

   isojsInitialState: function(){
      return {menu: []};
   },

   loadMenu: function(){
      superagent
      .get('/blog/getmenu')
      .accept('application/json')
      .use(isojs.superagentPlugin)
      .end(function(err, res){
         if(err){
            return this.setState({menu: []});;
            return console.error('FAIL', err);
         }
         this.setState({menu: JSON.parse(res.text)});
      }.bind(this));
   },

   componentDidMount: function(){
      this.loadMenu();
   },
  render: function() {

  	return (
        <div className={'wrap'}>
       <div style={{'textAlign': 'justify'}}>
       <h1>This is a list of all posts:</h1>
       <br/>
          {this.state.menu.map(function(result) {
             return <div key={result._id}><Link to={"/blogpost/"+result._id}>{result.title}</Link></div>;
          })}
      </div>
      </div>
    );
  }

});

module.exports = BlogPostList;
