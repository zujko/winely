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
  viewmodel = { //don't forget to implement paging for result foods
    title: "Browse Foods",
    selected_foods: [ //6 suggested foods
      {
        id: "dfd89677-c8ca-4898-8def-f020010ff821",
        picture: "36ac947e-8038-4abc-8686-5e5921f1850b",
        name: "Buffalo Wings"
      }, 
      {
        id: "f905509e-3533-4a03-8078-6c66bf7ee8cb",
        picture: "69cc9ee5-aa9a-4672-8a2b-f58bcf539b9d",
        name: "Buffalo Wing Dip"
      },
      {
        id: "c6d0ecb7-1634-4380-a3ad-9f535ce32172",
        picture: "8b12325d-f421-4085-87db-36e34d3268ee",
        name: "Buffalo Wing Potato Chips"
      },
      {
        id: "38b5cff4-70b7-4c52-a039-988e4034e421",
        picture: "09cd642f-06ea-4cb2-9aa9-b9ae9d74ebb5",
        name: "Buffalo Style Peas and Carrots"
      },
      {
        id: "606eaf71-2a93-4006-b4d2-c7a2227ed6da",
        picture: "233dd1da-4496-46c6-b983-033f4d8582c6",
        name: "Buffalo Ranch Explosion"
      },
      {
        id: "adf6e2ae-a46c-462c-b8db-cc3be159981e",
        picture: "1e2f6756-5854-42ad-970e-cb0468e9ba48",
        name: "Buffalo Chicken Quesadilla, no celery"
      }
    ],
    result_foods: [
      {
        id: "7d72c613-e403-428f-a63e-7fbde05f98fe",
        picture: "90173cfd-2f4d-4d7d-80fb-d7798f140606",
        name: "Amber's Promise",
        fatty: true,
        sweet: true,
        dense: true,
        starchy: true,
        delicate: true,
        strong: false
      }
    ],
    current_page: 1,
    count_pages: 10 //number of pages of 20 wines we can show
  }
  for(x =0; x < 19; x++){ //for conciseness
    viewmodel.result_foods.push({
        id: "7d72c613-e403-428f-a63e-7fbde05f98fe",
        picture: "90173cfd-2f4d-4d7d-80fb-d7798f140606",
        name: "Amber's Promise",
        fatty: true,
        sweet: true,
        dense: true,
        starchy: true,
        delicate: true,
        strong: false
      })
  }
  callback(viewmodel)
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
