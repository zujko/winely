var getPic = function(id,type)
{
  var hash = id.charCodeAt(0);

  var max;

  if(type === 'wine')
  {
    max =9
  }
  if(type === 'region')
  {
    max = 10
  }
  if(type === 'grape')
  {
    max = 12
  }
  if(type === 'vineyard')
  {
    max = 15
  }
  var val = (hash%max)+1
  return type+''+val
}
module.exports.getPic = getPic;
