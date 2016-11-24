var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  viewmodel = {
    title: "Browse Wineries"
  }
  res.render('producers/index', { viewmodel: viewmodel });
});

router.get('/details', function(req, res, next) {
  viewmodel = {
    title: "Winery Details"
  }
  res.render('producers/detail', { viewmodel: viewmodel });
});

module.exports = router;
