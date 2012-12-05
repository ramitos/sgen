var sgen = require('sgen');

document.getElementById('rgen').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('r').value = sgen.random(document.getElementById('rlen').value);
});

document.getElementById('tgen').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('t').value = sgen.timestamp(document.getElementById('tfrom').value);
});