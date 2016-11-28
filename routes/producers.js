var express = require('express');
var router = express.Router();
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/winely';

/* GET home page. */
router.get('/', function(req, res, next) {
  getProducerBrowse(0, function(producer_browse_vm){
    res.render('producers/index', {viewmodel: producer_browse_vm})
  })
});

router.get('/details/:id', function(req, res, next) {
  getproducer(req.params.id, function(producer_vm){
    res.render('producers/detail', { viewmodel: producer_vm }); //callback because we're going to need async
  })
  
});

router.get('/:page', function(req, res, next) {
  getproducerBrowse(req.params.page, function(producer_browse_vm){
    res.render('producers/index', {viewmodel: producer_browse_vm})
  })
});

getProducerBrowse = function(page, callback) {
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      callback({});
    }

    var selectedProducers = [];
    var query = client.query('SELECT id, name FROM vineyard LIMIT 20');
    query.on('row', (row) => {
      selectedProducers.push(JSON.parse(JSON.stringify(row)));
    });
    query.on('end', () => {
      done();
      viewmodel = {
        title: "Browse producers",
        selected_producers: selectedProducers.slice(1,6),
        result_producers: selectedProducers,
        current_page:page
        //count_pages
      }
      callback(viewmodel);
    });
  });
}

/**
 * getWine - gets a full viewmodel for a particular wine.
 * replace this with code that calls the database to make this work
 */
getproducer = function(producer_id, callback) {
  var wineResults = [];
  var vineyard = {};
  var region = {};
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      callback({});
    } 
    var query = client.query('SELECT * FROM vineyard WHERE id = $1', [producer_id]);
    query.on('row', (row) => {
      vineyard = JSON.parse(JSON.stringify(row));
      console.log(JSON.stringify(vineyard, null, 4));
    });

    query.on('end', () => {
      query = client.query('SELECT id, name, color, price FROM wine WHERE vineyard_id = $1', [producer_id]);
      query.on('row', (row) => {
        wineResults.push(JSON.parse(JSON.stringify(row)));
      });
      query.on('end', () => {
        query = client.query('SELECT * FROM region WHERE id=$1',[vineyard.region_id]);
        query.on('row', (row) => {
          region = JSON.parse(JSON.stringify(row));
        });
        query.on('end', () => {
          done();
          viewmodel = {
            id: vineyard.id,
            picture: vineyard.id,
            picture_cover: vineyard.id,
            name: vineyard.name,
            lat: vineyard.location.x,
            lng: vineyard.location.y,
            description: vineyard.description,
            wines: wineResults,
            region: region
          }
          callback(viewmodel);
        });
      });
    });
  });
}

module.exports = router;
