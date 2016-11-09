var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app.js");

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
                return myObj[key];
            });
            console.log(final);
          //expect(res.text).to.be.equal("Hello!");
          final[0].Title.should.be.equal("Raja Rani");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

/*describe("Testing the second route", function(err){
  it("Posting the movie", function(done){
    url
        .get("/product/5/6")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          parseFloat(res.text).should.be.equal(30);
          done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Amit");
          done();
        });

  });
  it("should handle and send the JSON data Part 2", function(done){
    url
        .get("/data/js")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Mahesh");
          done();
        });

  });
});*/
