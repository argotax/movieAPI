var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = querystring.parse(url.parse(req.url).query);

  switch (params['type']) {
    case 'add':
      models
      .actors
      .create({
        firstname: params['firstname'],
        lastname: params['lastname']
      });
      break;
    case 'modify':
      models
      .actors
      .findOne({
        where:{ firstname: params['firstname'], lastname: params['lastname'] }
      }).then(
        film => {
          id = film.id;

          switch (params['label']) {
            case 'firstname':
              models
              .actors
              .update({
                firstname: params['firstnameValue']
               },{
                 where: { id: id }
               })
            case 'lastname':
              models
              .actors
              .update({
                lastname: params['lastnameValue']
               },{
                 where: { id: id }
               })
            default:
              console.log('Undefined label');
            }
        }
      );

      break;
    case 'delete':
      models
      .actors
      .destroy({
        where: {
          firstname: params['firstname'],
          lastname: params['lastname']
        }
      })
      break;
    default:
      console.log('Undefined type');
  }

  res.render('index', { title: 'Express' });
});

module.exports = router;
