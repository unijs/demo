
var React = require('react');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

var Footer = React.createClass({

  render: function() {

  	return (
        <div className={'wrap'}>
       <div style={{'textAlign': 'justify'}}>
       <h1>Welcome</h1>
       <br />
      This is an isojs demo app. It renders fully isomorphic without defining any data fetching on serverside.
      <br/><br/>
      <Link to={"/blogpostlist"}>Here</Link> you can find a list of blogposts.<br/>
      </div>
      </div>
    );
  }

});

module.exports = Footer;
