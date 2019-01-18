var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');

/* GET movie listing. */
router.get('/', function(req, res, next) {
  var params = querystring.parse(url.parse(req.url).query);

  switch (params['type']) {
    case 'add':
      
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Undefined type');
  }



  res.render('index', { title: 'Express' });
});

module.exports = router;
