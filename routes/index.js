var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.redirect('/articles/list/1/3')
});

module.exports = router;
