
var React = require('react');
var superagent = require('superagent');
var isojs = require('isojs');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

var Header = React.createClass({
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
       <div id="header">
           <div className={'wrap'}>
               <span className={'logo'}>
                  <Link to={"/"}><span><img src={"/img/isologo.svg"} /> &nbsp; isoJS</span></Link>
               </span>
               &nbsp;
               <span className={'nav-menu-div'}>
                   <ul className={'nav-menu'}>
                         {this.state.menu.map(function(result) {
                            return <Link to={"/blogpost/"+result._id} key={result._id} className="nav-menu-href" activeClassName="highlight">{result.title}</Link>;
                         })}
                   </ul>
               </span>
           </div>
       </div>
     );
   }

});

module.exports = Header;
