var React = require('react');
var Child = require('./Child');
var Child1 = require('./Child1');
var NewMain = React.createClass({
   getInitialState: function()
   {
      return {data: []};
   },
   getRetrieveData: function(title)
   {
     $.ajax({
      url:"http://www.omdbapi.com/?s="+title,
      type: 'GET',
      dataType: 'JSON',
      success: function(SampleData)
      {
          this.setState({data:SampleData.Search});
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },
render: function(){
    return (
      <div>
        <Child  clickFunctionForChild={this.getRetrieveData} />
        <Child1 MovieData={this.state.data}/>
        </div>
    )
  }
});

module.exports=NewMain;
