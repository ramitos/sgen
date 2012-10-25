module.exports = function (length) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  var hash = [];
  
  for(var i = 0; i < length; i += 1) {
    hash.push(chars[Math.floor(Math.random()*62)]);
  }
  
  return hash.join('');
};