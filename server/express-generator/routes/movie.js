var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/san', function(req, res, next) {
  console.log(req.body);
  res.send("my movie App");

});

module.exports = router;
