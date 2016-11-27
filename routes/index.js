var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', stormpath.getUser, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
