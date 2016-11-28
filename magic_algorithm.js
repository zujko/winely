/**
 * Function takes a wine object and constructs a pgsql query to find a recommended food
 */
var recommend_food = function(wine) {
  var query = "select name,picture,id from foods where "
  if (wine.tannin > .3){
    query+= " salty = FALSE and "
  }
  if (wine.sugar > .4){
    query+= " sweet = TRUE and "
  }
  if (wine.body > .5) {
    query+= " dense = TRUE and "
  }
  query+= " TRUE = TRUE" // simplification for terminating ands
  return query;
}

/**
 * Function takes a food object and constructs a pgsql query to find a recommended wine
 */
var recommend_wine = function(food) {
  var query = "select * from wine where "
  if (!food.dense){
    query+= " body < .5 and "
  }
  if (food.dense){
    query+= " body > .5 and "
  }
  if (food.salty){
    query+= " tannin < .1 and "
  }

  query += " TRUE = TRUE "

  if (food.acid || food.fatty){
    query += " order by acid, tannin desc "
  }
  return query;
}
module.exports.recommend_food = recommend_food;
module.exports.recommend_wine = recommend_wine;
