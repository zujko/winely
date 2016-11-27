var express = require('express');
var router = express.Router();
var pg = require('pg');

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
  viewmodel = {
    search_query: query,
    wines: [ //magically produced by an algorithm
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Hillary's Triumph",
        color: "Honey",
        price: "$9",
        reason: "Hillary's Triumph pairs well with fatty, sweet foods." //why we suggested it
      },
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Louisa's Redemption",
        color: "Red",
        price: "$13",
        reason: "Louisa's Redemption pairs well with delicate, starchy foods."
      }
    ],
    regions: [
      {
        id: "bc622c41-830c-49a7-ab63-4ef5f1e040e9",
        picture: "660b3ae8-2e14-48ab-a3bf-12e94937363e",
        name: "Mt. Hood Foothills AVA", //title
        climate: "Continental",
      }, 
      {
        id: "fc322db2-54ee-4155-9498-de99818a5b55",
        picture: "c31c0ec4-ea96-4094-85a9-6342897528de",
        name: "Canindagua Valley AVA", //title
        climate: "Continental",
      }
      ],
    producers: [
      {
        id: "bc622c41-830c-49a7-ab63-4ef5f1e040e9",
        picture: "660b3ae8-2e14-48ab-a3bf-12e94937363e",
        name: "Samantha's Fortune"
      }, 
      {
        id: "fc322db2-54ee-4155-9498-de99818a5b55",
        picture: "c31c0ec4-ea96-4094-85a9-6342897528de",
        name: "Annette's Opportunity"
      }
    ]
    }
  callback(viewmodel)
}

module.exports = router;
