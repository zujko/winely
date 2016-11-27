var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', stormpath.getUser, function(req, res, next) {
  if(req.user) {
    console.log('User: '+req.user.email);
  } else {
    console.log('Not logged in!');
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
