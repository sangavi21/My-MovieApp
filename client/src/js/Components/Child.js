var React = require('react');

var Child = React.createClass({
  getInitialState: function()
  {
    return {title:''};
  },
  handleTitle: function(t)
  {
    console.log('typing...');
    this.setState({title: t.target.value});
  },
  handleclick: function()
  {
      console.log('inside handleclick');
      console.log("Movie Title " + this.state.title);
      this.props.clickFunctionForChild(this.state.title);
  },
  render: function(){
    return (
      <div>
      <center>
      <h1> My Movie App </h1>

        <input type='text' size='120' id='textfield' placeholder='Enter movie title..' onChange={this.handleTitle}></input>

        <button className="btn btn-success" id='search' onClick={this.handleclick}>Search</button>
      </center>
        </div>
    )
  }
});

module.exports=Child;
