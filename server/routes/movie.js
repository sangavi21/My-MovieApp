var express = require('express');
var router = express.Router();
var movie=require('../models/movie');

/* GET home page. */
router.route("/MovName").post(function(req, res) {
  if(req.body)
  {
    var uservar=new movie();
    uservar.Title=req.body.Title;
    uservar.Year=req.body.Year;
    uservar.imdbID=req.body.imdbID;
    uservar.Type=req.body.Type;
    uservar.Poster=req.body.Poster;
    uservar.save(function(err) {
      if(err)
      {
        res.send(err);
      }
      else {
        res.send('MovieApp posting...');
      }
    });
  }
});

router.route("/Add").get(function(req, res)
 {
  movie.find({}, function(err,allMovies){
     if(err)
     {
       res.send(err);
     }
     else {
       console.log("All movies in MongoDB fetched")
       var movieMap = {};

       allMovies.forEach(function(mov) {
         movieMap[mov._id] = mov;
       });
       res.send(movieMap);
     }
   })
});

router.route("/delete/:imdbID").delete(function(req,res)
{
    var request=req.params.imdbID;
    console.log(request);
    if(request)
    {
      movie.remove({imdbID:request},function(err){
        if(err) {
          res.send(err);
        }
        else  {
        res.send("movies deleted");
        }
      });
    }
  });

  router.route("/update").put(function(req,res)
  {
console.log("updating movie");
console.log(req.body);
    if(req.body)
    {
      
      movie.update({imdbID:req.body.imdbID}, {$set: {Title:req.body.Title}},function(err){
        if(err) {
          console.log(err);
          res.send(err);
        }
        else  {
          console.log("success");
          res.send("movies updated");
        }
      });
    }
  });

module.exports = router;
