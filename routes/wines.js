var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  viewmodel = {
    title: "Browse Wines"
  }
  res.render('wines/index', { viewmodel: viewmodel });
});

router.get('/details', function(req, res, next) {
  viewmodel = {
    title: "Wine Details",
    name: "Wine Name",
    percentAlcohol: "14.5",
    price: "$14",
    color: "red",
    year: "2014",
    summary: "yolo wine nonsense",
    count_reviews: "50",
    rating: "4.5/5"
  }
  res.render('wines/detail', { viewmodel: viewmodel });
});

module.exports = router;
