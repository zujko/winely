var express = require('express');
var router = express.Router();
var pg = require('pg');

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
      },
      {
        id: "5a7f9786-6b9c-44e8-a82b-21b181fe37a0",
        picture: "41a575db-8fd8-42a5-a18a-674e7f64a675",
        name: "Hero's Pen",
        color: "Red",
        price: "$14"
      },
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Amber's Promise",
        color: "Honey",
        price: "$10"
      }
    ],
    result_wines: [
      {
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Amber's Promise",
        color: "Honey",
        price: "$10"
      }
    ],
    current_page: 1,
    count_pages: 10 //number of pages of 20 wines we can show
  }
  for(x =0; x < 19; x++){ //for conciseness
    viewmodel.result_wines.push({
        id: "50414f98-2229-49da-8235-2330b04f6949",
        picture: "eac64461-ae52-4712-b667-78699f3a0d6d",
        name: "Amber's Promise",
        color: "Honey",
        price: "$10"
      })
  }
  callback(viewmodel)
}

/**
 * getWine - gets a full viewmodel for a particular wine.
 * replace this with code that calls the database to make this work
 */
getWine = function(wine_id, callback) {
  viewmodel = {
    title: "Purple Tail", //from db.wine
    percentAlcohol: .145,
    sugar: .5,
    acid: .8,
    brix: .7,
    body: .1,
    price: "$14",
    color: "red",
    tannin: .2,
    fruity: true,
    spicy: true,
    tart: false,
    summary: "Purple Tail is Washington's premier easy-drinking wine.",
    vintage: {
      year: 2014, //wine
      comment: "2014 was an unusually rainy year for Washington's typically warm and dry vineyards...", //db.vintage
      region: { //pulled from vineyard
        name: "Willammette Valley",
        id: "c58f6806-b130-4915-a37e-2045b8cee7fa"
      }
    },
    vineyard: { //db.vineyard
      id: "32a030d9-3ba6-4b39-b907-44f9cac997dd",
      name: "PNW WineTime",
      lat: "46.133196", //extracted from point
      lng: "-121.385009",
      description: "PNW WineTime is Washington state's premier producer of easy-drinking wine for all occasions.",
      picture_cover: "88df6a51-5c59-45b8-a71b-1f2439ebe637",
      picture_thumb: "c53529fe-08bf-4b57-bab5-3e19e58742b3"
    },
    foods: [ //computed by querying foods and applying rules based on wine's attributes
      {
        name: "Buffalo Wings",
        picture: "e62b675c-4b58-4697-ae4b-a244eacf026d",
        id: "880e5194-e504-4df9-aac3-5653d1698493"
      },
      {
        name: "Ranch Quesadilla",
        picture: "966a71b7-27c4-494b-811b-6cbf29531982",
        id: "0634d163-01bc-4775-815d-5444113426f2"
      },
      {
        name: "Spam!",
        picture: "b7deae52-5f1e-4773-b4d3-dca7d4680c9a",
        id: "298bb6e2-cbde-4174-aa31-ab4345c45393"
      }
    ], 
    grape_blend: [{ //db.grape_component
        name: "Gewurztaminer",
        color: "red",
        id: "01cfcecb-e3c1-475f-a0f1-659c3c3dea87",
        percent: .8
      },
      {
        name: "Merlot",
        color: "Red",
        id: "c58f6806-b130-4915-a37e-2045b8cee7fa",
        percent: .2
      }
    ],
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

  callback(viewmodel)
}

module.exports = router;
