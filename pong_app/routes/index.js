var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pong' });
  console.log('user has visited index page.');
});

module.exports = router;
