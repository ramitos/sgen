module.exports = function (length) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
      hash = new Array(length)

  for(var i = 0; i < hash.length; i += 1) { hash[i] = chars[Math.floor(Math.random()*62)] }
  return hash.join('')
}