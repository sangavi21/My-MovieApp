var express = require('express');
var router = express.Router();
var User=require('../models/users');

/* GET users listing. */
router.route("/add").post(function(req, res) {
  if(req.body)
  {
    var uservar=new User();
    uservar.username=req.body.username;
    uservar.password=req.body.password;
    uservar.save(function(err) {
      if(err)
      {
        res.send(err);
      }
      else {
        res.send('user Inserted');
      }
    });
  }
});
module.exports = router;
