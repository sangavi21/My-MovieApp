var React = require('react');
var {Link}=require('react-router');
var Navbar = React.createClass({

  render: function(){
    return(
      <div className="container-fluid">
      <ul className="nav navbar-nav">
       <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/Favourite">View My Favourite Movie</Link></li>
       <li> <Link to="/gmailbox">Gmail</Link></li>
       <li> <Link to="/about">About Us</Link></li>

      </ul>
      </div>
    )
  }
});
module.exports=Navbar;
