
var React = require('react');
var Header = require('./Header.react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var MainApp = React.createClass({
    render: function () {
        return (
           <div>
             <Header></Header>
             <br/><br/><br/><br/><br/>
             <RouteHandler/>
             <br/><br/>&nbsp;
           </div>
        );
    }

});

module.exports = MainApp;
