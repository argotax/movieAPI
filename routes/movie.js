var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var models = require('../models');

/* GET movie listing. */
router.get('/', function(req, res, next) {
  var params = querystring.parse(url.parse(req.url).query);

  switch (params['type']) {
    case 'add':
      models
      .film
      .create({
        titre: params['title'],
        année: params['year'],
        poster: params['poster'],
        synopsis: params['synopsis'],
        category: params['category']
      });
      break;
    case 'modify':
      models
      .film
      .findOne({
        where:{ titre: params['title'] }
      }).then(
        film => {
          id = film.id;

          switch (params['label']) {
            case 'titre':
              models
              .film
              .update({
                titre: params['value']
               },{
                 where: { id: id }
               })
            case 'Mangoes':
            case 'Papayas':
              console.log('Mangoes and papayas are $2.79 a pound.');
              // expected output: "Mangoes and papayas are $2.79 a pound."
              break;
            default:
              console.log('Sorry, we are out of ' + expr + '.');
            }

        }
      );

      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Undefined type');
  }



  res.render('index', { title: 'Express' });
});

module.exports = router;
