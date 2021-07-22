// Global rxjs from unpkg.com/rxjs@7.2.0/dist/bundles/rxjs.umd.js
var ajax = rxjs.ajax.ajax;

var url = 'https://api.github.com/users?per_page=2';

var users = ajax.getJSON(url);
var subscribe = users.subscribe(
  function(res) { console.log(typeof res, res) },
  function(err) { console.error(err) }
);
