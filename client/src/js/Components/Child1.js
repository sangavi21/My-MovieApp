var React = require('react');
var Movie = require('./Movie.js')
var Child1 = React.createClass({

  render: function(){
    var movieComponents = this.props.MovieData.map(function(movie){
      return (
                <Movie
                    allData={movie}
                    key={movie.imdbID}
                  >
                </Movie>
            );
        }.bind(this));
      return(
    <div className="moiveList">
    {movieComponents}
    </div>
  );
  }
});
module.exports=Child1;
