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
            case 'année':
              models
              .film
              .update({
                année: params['value']
               },{
                 where: { id: id }
               })
            case 'poster':
            models
            .film
            .update({
              poster: params['value']
             },{
               where: { id: id }
             })
              break;
            case 'synopsis':
            models
            .film
            .update({
              synopsis: params['value']
             },{
               where: { id: id }
             })
              break;
            case 'category':
            models
            .film
            .update({
              category: params['value']
             },{
               where: { id: id }
             })
              break;
            default:
              console.log('Undefined label');
            }
        }
      );

      break;
    case 'delete':
      models
      .film
      .destroy({
        where: {
          titre: params['title']
        }
      })
      break;
    default:
      console.log('Undefined type');
  }

  res.render('index', { title: 'Express' });
});

module.exports = router;
