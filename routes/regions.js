var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  viewmodel = {
    title: "Browse Regions"
  }
  res.render('regions/index', { viewmodel: viewmodel });
});

router.get('/details', function(req, res, next) {
  viewmodel = {
    title: "Region Details"
  }
  res.render('regions/detail', { viewmodel: viewmodel });
});

module.exports = router;
