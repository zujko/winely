var fs = require('fs');
var getPic = function(id,type)
{
  if (fs.existsSync("./public/images/" + id + ".jpg")) {
    return id;
  }
  // http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery 
  var hash = id, i, chr, len;
  for (i = 0, len = id.length; i < len; i++) {
    chr   = id.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  hash = Math.abs(hash) // prevent negatives

  var max;
  if(type === 'food')
  {
    max =7
  }
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
    max = 14
  }
  var val = (hash%max)+1
  return type+''+val
}
module.exports.getPic = getPic;
