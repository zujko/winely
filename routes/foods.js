var express = require('express');
var router = express.Router();
var magicAlgo = require('../magic_algorithm');
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/winely';

/* GET home page. */
router.get('/', function(req, res, next) {
  getFoodBrowse(0, function(food_browse_vm){
    res.render('foods/index', {viewmodel: food_browse_vm})
  })
});

router.get('/details/:id', function(req, res, next) {
  getFood(req.params.id, function(food_vm){
    res.render('foods/detail', { viewmodel: food_vm }); //callback because we're going to need async
  })
  
});

router.get('/:page', function(req, res, next) {
  getFoodBrowse(req.params.page, function(food_browse_vm){
    res.render('foods/index', {viewmodel: food_browse_vm})
  })
});

getFoodBrowse = function(page, callback) {
  var foods = [];
  var count = 0;
  pg.connect(connectionString, (err, client, done) => {
    var query = client.query('SELECT * FROM foods LIMIT 20 OFFSET $1',[20*page]);
    
    query.on('row', (row) => {
      foods.push(JSON.parse(JSON.stringify(row)));
    });
    query.on('end', () => {
      query = client.query('SELECT count(*) FROM foods');
      query.on('row', (row) => {
        count = Number(JSON.parse(JSON.stringify(row)).count); 
      });
      query.on('end', () => {
        done();
        viewmodel = {
          title: "Browse Foods",
          selected_foods: foods.slice(1,5),
          result_foods: foods,
          current_page: page,
          count_pages: Math.ceil(count/20)
        }
        callback(viewmodel);
      });
    });
  }); 
}

/**
 * getWine - gets a full viewmodel for a particular wine.
 * replace this with code that calls the database to make this work
 */
getFood = function(food_id, callback) {
  pg.connect(connectionString, (err, client, done) => {
    var foodResult = {};
    var wineRec = [];
    var query = client.query('SELECT * FROM foods WHERE id=$1',[food_id]);
    query.on('row', (row) => {
      foodResult = JSON.parse(JSON.stringify(row));
    });
    query.on('end', () => {
      console.log(magicAlgo.recommend_wine(foodResult));
      query = client.query(magicAlgo.recommend_wine(foodResult));
      query.on('row', (row) => {
        wineRec.push(JSON.parse(JSON.stringify(row)));
      });
      query.on('end', () => {
        done();
        viewmodel = {
          id: foodResult.id,
          picture: foodResult.picture,
          name: foodResult.name,
          fatty: foodResult.fatty,
          sweet: foodResult.sweet,
          dense: foodResult.dense,
          starchy: foodResult.starchy,
          delicate: foodResult.delicate,
          strong: foodResult.strong,
          description: foodResult.description,
          suggested_wines: wineRec

        } 
        console.log(JSON.stringify(viewmodel));
        callback(viewmodel);
      });
    });
  });
}

module.exports = router;
