var express = require('express');
var router = express.Router();
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/winely';

/* GET home page. */
router.get('/', function(req, res, next) {
  getRegionBrowse(0, function(region_browse_vm){
    res.render('regions/index', {viewmodel: region_browse_vm})
  })
});

router.get('/details/:id', function(req, res, next) {
  getRegion(req.params.id, function(region_vm){
    res.render('regions/detail', { viewmodel: region_vm }); //callback because we're going to need async
  })
  
});

router.get('/:page', function(req, res, next) {
  getRegionBrowse(req.params.page, function(region_browse_vm){
    res.render('regions/index', {viewmodel: region_browse_vm})
  })
});

getRegionBrowse = function(page, callback) {
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      callback({});
    }
    var selectedRegions = [];
    var count = 0;
    var query = client.query('SELECT * FROM region LIMIT 20 OFFSET $1', [20*page]);
    query.on('row', (row) => {
      selectedRegions.push(JSON.parse(JSON.stringify(row)));
    });
    query.on('end', () => {
      query = client.query('SELECT count(*) FROM region');
      query.on('row', (row) => {
        count = Number(JSON.parse(JSON.stringify(row)).count);
      });
      query.on('end', () => {
        done();
        viewmodel = {
          title: "Browse Regions",
          selected_regions: selectedRegions.slice(1,5),
          result_regions: selectedRegions,
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
getRegion = function(region_id, callback) {
  pg.connect(connectionString, (err, client, done) => {
    var regionResult = {};
    var vintages = [];
    var producers = [];
    var wines = [];
    var query = client.query('SELECT * FROM region WHERE id=$1', [region_id]);
    query.on('row', (row) => {
      regionResult = JSON.parse(JSON.stringify(row));
    });

    query.on('end', () => {
      query = client.query('SELECT * FROM vintage_attrs WHERE region_id=$1', [region_id]);
      query.on('row', (row) => {
        vintages.push(JSON.parse(JSON.stringify(row)));
      });  
      query.on('end', () => {
        //PRODUCERS
        query = client.query('SELECT id, name FROM vineyard WHERE region_id=$1',[region_id]);
        query.on('row', (row) => {
          producers.push(JSON.parse(JSON.stringify(row)));
        });
        query.on('end', () => {
          //WINES
          query = client.query('SELECT * FROM wine WHERE vineyard_id=$1', [producers[0].id]);
          query.on('row', (row) => {
            wines.push(JSON.parse(JSON.stringify(row)));
          });
          query.on('end', () => {
            done();
            viewmodel = {
              id: regionResult.id,
              picture: regionResult.id,
              picture_cover: regionResult.id,
              name: regionResult.title,
              climate: regionResult.climate_type,
              description: regionResult.description,
              vintages: vintages,
              suggested_wines: wines,
              suggested_producers: producers
            }
            callback(viewmodel);
          });
        });
      });
    });
  });
}

module.exports = router;
