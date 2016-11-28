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
  viewmodel = { //don't forget to implement paging for result foods
    title: "Browse producers",
    selected_producers: [ //6 suggested foods
      {
        id: "bc622c41-830c-49a7-ab63-4ef5f1e040e9",
        picture: "660b3ae8-2e14-48ab-a3bf-12e94937363e",
        name: "Samantha's Fortune"
      }, 
      {
        id: "fc322db2-54ee-4155-9498-de99818a5b55",
        picture: "c31c0ec4-ea96-4094-85a9-6342897528de",
        name: "Annette's Opportunity"
      },
      {
        id: "660b3ae8-2e14-48ab-a3bf-12e94937363e",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        name: "Pristina's Outlook"
      },
      {
        id: "f8d724ee-82a1-438b-813f-63493040995d",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        name: "Natalie's Fanatacism"
      },
      {
        id: "d85ce9a7-e9ce-49ee-91aa-36e35e760558",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        name: "Opportunity's Honesty"
      },
      {
        id: "739d136e-9aa3-4704-8164-3d7e7f72eb28",
        picture: "d85ce9a7-e9ce-49ee-91aa-36e35e760558",
        name: "Hope's Place"
      }
    ],
    result_producers: [
      {
        id: "739d136e-9aa3-4704-8164-3d7e7f72eb28",
        picture: "d85ce9a7-e9ce-49ee-91aa-36e35e760558",
        name: "Hope's Place"
      }
    ],
    current_page: 1,
    count_pages: 10 //number of pages of 20 wines we can show
  }
  for(x =0; x < 19; x++){ //for conciseness
    viewmodel.result_producers.push({
        id: "739d136e-9aa3-4704-8164-3d7e7f72eb28",
        picture: "d85ce9a7-e9ce-49ee-91aa-36e35e760558",
        name: "Hope's Place"
      })
  }
  callback(viewmodel)
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
