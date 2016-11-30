var express = require('express');
var router = express.Router();
const pg = require('pg');
var magicPic = require('../magic_picture_selector');
const connectionString = 'postgres://localhost:5432/winely';

/* GET home page. */
router.get('/', function(req, res, next) {
  search_vm = {
    title: "Search"
  }
  res.render('search/index', {viewmodel: search_vm})
});

router.get('/results', function(req, res, next) { //results?query=wine+pls
  getSearchResult(req.query.query, function(search_result_vm){
    res.render('search/result', { viewmodel: search_result_vm }); //callback because we're going to need async
  })
});

getSearchResult = function(query, callback) {
  pg.connect(connectionString, (err, client, done) => {
    var wine = [];
    var vineyard = []
    var region = [];
    var queryS = client.query('SELECT * FROM wine WHERE name LIKE $1', ['%'+query+'%']);
    queryS.on('row', (row) => {
      wine.push(JSON.parse(JSON.stringify(row)));
    });
    queryS.on('end', () => {
      queryS = client.query('SELECT * FROM vineyard WHERE name LIKE $1', ['%'+query+'%']);
      queryS.on('row', (row) => {
        vineyard.push(JSON.parse(JSON.stringify(row)));
      });
      queryS.on('end', () => {
        queryS = client.query('SELECT * FROM region WHERE title LIKE $1', ['%'+query+'%']);
        queryS.on('row', (row) => {
          region.push(JSON.parse(JSON.stringify(row)));
        });
        queryS.on('end', () => {
          done();
          viewmodel = {
            search_query: query,
            wines: wine,
            regions: region,
            producers: vineyard,
            magic:magicPic
          }
          callback(viewmodel);
        });
      });
    });
  });
}

module.exports = router;
