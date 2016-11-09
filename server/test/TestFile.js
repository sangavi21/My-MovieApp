var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("Getting the movie", function(done){
    url
        .get("/movie/Add")
        .expect(200)
        .end(function(err,res){
             should.not.exist(err);
            var Obj=JSON.parse(res.text);
            var final=0;
            var final=Object.keys(Obj).map(function(key)
            {
                return Obj[key];
            });
          //expect(res.text).to.be.equal("Hello!");
          final[0].Title.should.be.equal("Mouna");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("Posting the movie", function(done){
    url
        .post("/movie/MovName")
        .expect(200)
        .send({"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWQ4ZjZlM2MtNWU4Ny00YjQ3LTk0YmMtNTQzOGM1NGVlNWI5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
    "Type": "movie",
    "imdbID": "tt3203910",
    "Year": "2013",
    "Title": "Raja Rani"})
        .end(function(err,res){
             should.not.exist(err);
               res.text.should.equal("MovieApp posting...");
          done();
        });
  });
});

describe("Testing the third route", function(err){
  it("delete the movie", function(done){
    url
        .del("/movie/delete/tt3203910")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          res.text.should.equal("movie deleted");
          done();
        });
  });
});

describe("Testing the Fourth route", function(err){
  it("Updating the movie", function(done){
    url
        .put("/movie/update")
        .expect(200)
        .send({"Title":"Mouna","imdbID":"tt2145803"})
        .end(function(err,res){
          should.not.exist(err);
          res.text.should.equal("movies updated");
            done();
        });

  });
});
