/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(p, parent, orig){
  var path = require.resolve(p)
    , mod = require.modules[path];

  // lookup failed
  if (null == path) {
    orig = orig || p;
    parent = parent || 'root';
    throw new Error('failed to require "' + orig + '" from "' + parent + '"');
  }

  // perform real require()
  // by invoking the module's
  // registered function
  if (!mod.exports) {
    mod.exports = {};
    mod.client = mod.component = true;
    mod.call(this, mod, mod.exports, require.relative(path));
  }

  return mod.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path){
  var orig = path
    , reg = path + '.js'
    , regJSON = path + '.json'
    , index = path + '/index.js'
    , indexJSON = path + '/index.json';

  return require.modules[reg] && reg
    || require.modules[regJSON] && regJSON
    || require.modules[index] && index
    || require.modules[indexJSON] && indexJSON
    || require.modules[orig] && orig
    || require.aliases[index];
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `fn`.
 *
 * @param {String} path
 * @param {Function} fn
 * @api private
 */

require.register = function(path, fn){
  require.modules[path] = fn;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to){
  var fn = require.modules[from];
  if (!fn) throw new Error('failed to alias "' + from + '", it does not exist');
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj){
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function fn(path){
    var orig = path;
    path = fn.resolve(path);
    return require(path, parent, orig);
  }

  /**
   * Resolve relative to the parent.
   */

  fn.resolve = function(path){
    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    if ('.' != path.charAt(0)) {
      var segs = parent.split('/');
      var i = lastIndexOf(segs, 'deps') + 1;
      if (!i) i = 0;
      path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
      return path;
    }
    return require.normalize(p, path);
  };

  /**
   * Check if module is defined at `path`.
   */

  fn.exists = function(path){
    return !! require.modules[fn.resolve(path)];
  };

  return fn;
};require.register("sgen/src/sgen.js", function(module, exports, require){
var map = require('./map');

module.exports.timestamp = function (from) {
  if(!from) from = 1328054400000; //2012/1/1
  
  var timestamp = (new Date().getTime() - from).toString().split('');
  var elements = [];
  var hash = '';
  
  for(var i = 0; i < timestamp.length; i += 1) {
    if(i%2 === 0) elements.push(timestamp[i]);
    else elements[elements.length -1] += timestamp[i];
  }
  
  for(var y = 0; y < elements.length; y += 1) {
    hash += map[elements[y]];
  }
  
  return hash;
}

module.exports.random = function (length) {
  if(!length) length = 6;
  
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  var hash = [];

  for(var i = 0; i < length; i += 1) {
    hash.push(chars[Math.floor(Math.random()*62)]);
  }

  return hash.join('');
};
});
require.register("sgen/src/map.js", function(module, exports, require){
module.exports = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "a",
  "11": "b",
  "12": "c",
  "13": "d",
  "14": "e",
  "15": "f",
  "16": "g",
  "17": "h",
  "18": "i",
  "19": "j",
  "20": "k",
  "21": "l",
  "22": "m",
  "23": "n",
  "24": "o",
  "25": "p",
  "26": "q",
  "27": "r",
  "28": "s",
  "29": "t",
  "30": "u",
  "31": "v",
  "32": "w",
  "33": "x",
  "34": "y",
  "35": "z",
  "36": "0a",
  "37": "1b",
  "38": "2c",
  "39": "3d",
  "40": "4e",
  "41": "5f",
  "42": "6g",
  "43": "7h",
  "44": "8i",
  "45": "9j",
  "46": "ak",
  "47": "bl",
  "48": "cm",
  "49": "dn",
  "50": "eo",
  "51": "fp",
  "52": "gq",
  "53": "hr",
  "54": "is",
  "55": "jt",
  "56": "ku",
  "57": "lv",
  "58": "mw",
  "59": "nx",
  "60": "oy",
  "61": "pz",
  "62": "q0",
  "63": "r1",
  "64": "s2",
  "65": "t3",
  "66": "u4",
  "67": "v5",
  "68": "w6",
  "69": "x7",
  "70": "y8",
  "71": "z9",
  "72": "0z",
  "73": "1y",
  "74": "2x",
  "75": "3w",
  "76": "4v",
  "77": "5u",
  "78": "6t",
  "79": "7s",
  "80": "8r",
  "81": "9q",
  "82": "ap",
  "83": "bo",
  "84": "cn",
  "85": "dm",
  "86": "el",
  "87": "fk",
  "88": "gj",
  "89": "hi",
  "90": "ih",
  "91": "jg",
  "92": "kf",
  "93": "le",
  "94": "md",
  "95": "nc",
  "96": "ob",
  "97": "pa",
  "98": "q9",
  "99": "r8",
  "01": "s7",
  "02": "t6",
  "03": "u5",
  "04": "v4",
  "05": "x3",
  "06": "y2",
  "07": "z1",
  "08": "a0",
  "09": "ba"
}
});
require.alias("sgen/src/sgen.js", "sgen/index.js");
