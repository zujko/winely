var express = require('express');
var router = express.Router();
var pg = require('pg');

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
  viewmodel = { //don't forget to implement paging for result foods
    title: "Browse Regions",
    selected_regions: [ //6 suggested foods
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
      },
      {
        id: "660b3ae8-2e14-48ab-a3bf-12e94937363e",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        name: "Mt. Rushmoore AVA", //title
        climate: "Continental",
      },
      {
        id: "f8d724ee-82a1-438b-813f-63493040995d",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        name: "South Africa", //title
        climate: "Maritime",
      },
      {
        id: "d85ce9a7-e9ce-49ee-91aa-36e35e760558",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        name: "Long Island AVA", //title
        climate: "Maritime",
      },
      {
        id: "739d136e-9aa3-4704-8164-3d7e7f72eb28",
        picture: "d85ce9a7-e9ce-49ee-91aa-36e35e760558",
        name: "Sicily", //title
        climate: "Mediterranean",
      }
    ],
    result_regions: [
      {
        id: "fc322db2-54ee-4155-9498-de99818a5b55",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        picture_cover: "a331b287-515b-44e6-9b39-32ef739301df",
        name: "Mt. Hood Foothills AVA", //title
        climate: "Continental",
        description: "Nestled at the base of Mount Hood, this region is famous for its Pinot Noir...."
      }
    ],
    current_page: 1,
    count_pages: 10 //number of pages of 20 wines we can show
  }
  for(x =0; x < 19; x++){ //for conciseness
    viewmodel.result_regions.push({
        id: "fc322db2-54ee-4155-9498-de99818a5b55",
        picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
        picture_cover: "a331b287-515b-44e6-9b39-32ef739301df",
        name: "Mt. Hood Foothills AVA", //title
        climate: "Continental",
        description: "Nestled at the base of Mount Hood, this region is famous for its Pinot Noir...."
      })
  }
  callback(viewmodel)
}

/**
 * getWine - gets a full viewmodel for a particular wine.
 * replace this with code that calls the database to make this work
 */
getRegion = function(region_id, callback) {
  viewmodel = {
    id: "fc322db2-54ee-4155-9498-de99818a5b55",
    picture: "765e53ec-5879-49d0-ac25-4b497fc6e607",
    picture_cover: "a331b287-515b-44e6-9b39-32ef739301df",
    name: "Mt. Hood Foothills AVA", //title
    climate: "Continental",
    description: "Nestled at the base of Mount Hood, this region is famous for its Pinot Noir....",
    vintages: [
      {
        year: 2016,
        description: "2016 was characterized by a warmer than usual summer, producing..."
      },
      {
        year: 2015,
        description: "2015 was characterized by a wetter than usual summer, producing..."
      },
      {
        year: 2013,
        description: "2014 was characterized by a drier than usual winter, producing..."
      },
      {
        year: 2012,
        description: "2014 was characterized by a windier than usual fall, producing..."
      }
    ],
    suggested_wines: [ //pulled by looking at wine->vineyard.region
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Hillary's Triumph",
        color: "Honey",
        price: "$9"
      },
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Louisa's Redemption",
        color: "Red",
        price: "$13"
      },
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Melissa's Penitence",
        color: "Red",
        price: "$15"
      }
    ],
    suggested_producers: [ //a.k.a vineyard
      {
        id: "f9f2b38d-04fe-4d49-ab6e-d3745651b8ff",
        picture: "4d9b57c2-6881-4c07-94c7-59d6bbcbcd90",
        name: "Brotherhood Scenes"
      },
      {
        id: "f0ff8717-bf67-442a-9ca8-78587ad5e1fd",
        picture: "8251c879-49ca-44ff-b391-b893d2eabf7e",
        name: "Lousy Aphorisms"
      },
      {
        id: "9fb6b93a-e47d-4903-8139-057b5c407e72",
        picture: "45bb0d88-a5ca-44b1-9e78-156f2cc5f6cf",
        name: "Exquisite Semblances"
      }
    ]
    }
  callback(viewmodel)
}

module.exports = router;
