var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  viewmodel = {
    title: "Browse Foods"
  }
  res.render('foods/index', { viewmodel: viewmodel });
});

router.get('/details', function(req, res, next) {
  viewmodel = {
    title: "Food Details"
  }
  res.render('foods/detail', { viewmodel: viewmodel });
});

module.exports = router;
