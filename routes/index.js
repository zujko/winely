var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var pg = require('pg');

/* GET home page. */
router.get('/', stormpath.getUser, function(req, res, next) {
  getWineBrowser(function (vm) {
    res.render('index', { title: 'Express', viewmodel: vm});
  })
  
});

getWineBrowser = function(callback) {
  viewmodel = { //don't forget to implement paging for result wines
    title: "Browse Wines",
    selected_wines: [ //6 suggested wines
      {
        id: "5ee725b1-b289-4ebf-8639-424cd1598282",
        picture: "d34d2033-c49c-4365-b017-699d9b79ca8b",
        name: "Orange Cat",
        color: "Red",
        price: "$19"
      }, 
      {
        id: "86738468-5419-4849-9c56-a859dcb0a0e4",
        picture: "50325f93-df9c-4ef0-9dcd-e8be6fd6c17f",
        name: "Seditious Sailor",
        color: "White",
        price: "$16"
      },
      {
        id: "d4c2b80c-e876-4396-ab84-33a040fe76db",
        picture: "0e128066-dd63-4e41-806e-747058970336",
        name: "Poppy Pumice",
        color: "Rosé",
        price: "$8"
      },
      {
        id: "ddc28e22-e4ac-4769-bd09-96a1497bfc31",
        picture: "bd777f25-a1ab-4f60-bdf8-37a26e4bf835",
        name: "Sandy's Surprise",
        color: "Red",
        price: "$10"
      }
    ]
  }
  callback(viewmodel)
}

module.exports = router;