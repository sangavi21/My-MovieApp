var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserHistory,Route,Router,IndexRoute}=require('react-router');

var Navbar = require('./Components/Navbar.js');
var About= require('./Components/Aboutus.js');
var GmailBox = require('./Components/GmailBox.js');
var Favourite = require('./Components/Favourite.js');
var NewMain = require('./Components/NewMain.js');
var MainComponent = React.createClass({
render: function(){
    return (
      <div>
      <Navbar/>
      {this.props.children}
        </div>
    );
  }
});

ReactDOM.render(<Router history={BrowserHistory}>
  <Route path="/" component={MainComponent}>
  <IndexRoute component={NewMain}/>
    <Route path="/home" component={NewMain}/>
    <Route path="/Favourite" component={Favourite}/>
      <Route path="/about" component={About}/>
        <Route path="/gmailbox" component={GmailBox}/>

    </Route>
  </Router>,document.getElementById('app'));
