var express = require('express');
var router = express.Router();
var magicAlgo = require('../magic_algorithm');
var magicPic = require('../magic_picture_selector');
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/winely';

/* GET home page. */
router.get('/', function(req, res, next) {
  getWineBrowse(0, function(wine_browse_vm){
    res.render('wines/index', {viewmodel: wine_browse_vm})
  })
});

router.get('/details/:id', function(req, res, next) {
  getWine(req.params.id, function(wine_vm){
    res.render('wines/detail', { viewmodel: wine_vm }); //callback because we're going to need async
  })

});

router.get('/:page', function(req, res, next) {
  getWineBrowse(req.params.page, function(wine_browse_vm){
    res.render('wines/index', {viewmodel: wine_browse_vm})
  })
});

getWineBrowse = function(page, callback) {
  pg.connect(connectionString,(err, client, done) => {
    if(err) {
      done();
      console.log(err);
      callback({})
    }
    var selected_wines = [];
    var count = 0;
    var query = client.query('SELECT id, name, color, price FROM wine LIMIT 20 OFFSET $1',[20*page]);
    query.on('row', (row) =>
    {
      selected_wines.push(JSON.parse(JSON.stringify(row)));
    });
    query.on('end', () => {
      query = client.query('SELECT count(*) FROM wine');
      query.on('row', (row) => {
        count = Number(JSON.parse(JSON.stringify(row)).count);
      });
      query.on('end', () => {
        done();
        viewmodel = {
          title: "Browse Wines",
          selected_wines: selected_wines.slice(1,5),
          result_wines: selected_wines,
          current_page: page,
          magic: magicPic,
          count_pages: Math.ceil(count/20),
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
getWine = function(wine_id, callback) {
  pg.connect(connectionString, (err, client, done) => {
    var wineResult = {};
    var vineyardResult = {};
    var vintageResult = {};
    var regionResult = {};
    var foodResult = [];
    var grapeCompResult = [];
    if(err) {
      console.log('Connection Error');
      done();
    }
    var query = client.query('SELECT * FROM wine WHERE id=$1',[wine_id]);
    query.on('row', (row) => {
      wineResult = JSON.parse(JSON.stringify(row));
    });
    query.on('end',() => {
      query = client.query('SELECT * FROM vineyard WHERE id=$1',[wineResult.vineyard_id]);
      query.on('row', (row) => {
        vineyardResult = JSON.parse(JSON.stringify(row));
      });
      query.on('end', () => {
        query = client.query('SELECT * FROM vintage_attrs WHERE year=$1 AND region_id=$2',[wineResult.vintage,vineyardResult.region_id])
        query.on('row', (row) => {
          vintageResult = JSON.parse(JSON.stringify(row));
        });
        query.on('end', () => {
          query = client.query('SELECT * FROM region WHERE id=$1',[vineyardResult.region_id]);
         query.on('row', (row) => {
          regionResult = JSON.parse(JSON.stringify(row));
         });
         query.on('end', () => {
           //CALCULATE FOODS
           query = client.query(magicAlgo.recommend_food(wineResult));
           query.on('row', (row) => {
            foodResult.push(JSON.parse(JSON.stringify(row)));
           });
           query.on('end', () => {
             //CALCULATE GRAPE COMPONENT
            query = client.query('SELECT name, berry_skin_color, percent, gc.id FROM grape_component gc INNER JOIN grape g ON gc.grape_id = g.id WHERE gc.wine_id = $1',[wine_id]);
             query.on('row', (row) => {
              grapeCompResult.push(JSON.parse(JSON.stringify(row)));
             });
             query.on('end', (row) => {
              wineVmCallback(wineResult, vineyardResult, vintageResult, regionResult, foodResult, grapeCompResult, callback, done, client);
             });
           });
         });
        });
      });
    });
  });
}
wineVmCallback = function(wine, vineyard, vintage, region,food, grapeComp, callback, done, client) {
  var foodResult = [];
  var query = client.query('SELECT name, id FROM foods LIMIT 3');
  query.on('row', (row) => {
    foodResult.push(JSON.parse(JSON.stringify(row)));
  });
  query.on('end', () => {
    done();
    viewmodel = {
      title: wine.name, //from db.wine
      percentAlcohol: wine.alcohol,
      sugar: wine.sugar,
      acid: wine.acid,
      brix: wine.brix,
      body: wine.body,
      price: wine.price,
      color: wine.color,
      tannin: wine.tannin,
      fruity: wine.fruity,
      spicy: wine.spicy,
      tart: wine.tart,
      magic: magicPic,
      id: wine.id,
      summary: wine.label_description,
      vintage: {
        year: wine.vintage, //wine
        comment: vintage.comment_, //db.vintage
        region: { //pulled from vineyard
          name: region.title,
          description: region.description,
          id: region.id
        }
      },
      vineyard: { //db.vineyard
        id: vineyard.id,
        name: vineyard.name,
        lat: vineyard.location.x, //extracted from point
        lng: vineyard.location.y,
        description: vineyard.description,
        picture_cover: "88df6a51-5c59-45b8-a71b-1f2439ebe637",
        picture_thumb: "c53529fe-08bf-4b57-bab5-3e19e58742b3"
      },
      foods: foodResult,
    grape_blend: grapeComp,
    reviews: [{
      title: "Great Wine!",
      date: "01-01-2015",
      body: "What an amazing wine!",
      stars: 5,
      user: {name: "George W.", id: "0c0f6b3e-a24c-403a-a533-bbe6b98a2fc5"}
    },
    {
      title: "Great for the job search!",
      date: "09-27-2016",
      body: "Fabulous wine! Helps get through long days of job searching and rejection. :)",
      stars: 5,
      user: {name: "Sally R.", id: "c8fac4ed-55c2-4c94-8d8d-52dbdf9a8c79"}
    }],
    rating: 4.5 //computed from reviews above
  }
  if (viewmodel.vintage.year == ''){
    viewmodel.vintage.year = 'NV'
  }
  callback(viewmodel)
  });
}

module.exports = router;
