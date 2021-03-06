var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var models = require('../models');

/* add a category */
router.get('/', function(req, res, next) {
  var params = querystring.parse(url.parse(req.url).query);

  switch (params['type']) {
    case 'add':
      models
      .categories
      .create({
        name: params['name']
      });
      break;


    case 'delete':
      models
      .categories
      .destroy({
        where: {
          id: params['id']
        }
      });
      break;

    case 'modify':

      models
      .categories
      .findOne({
        where :{name : params['name']}
      }).then(
        category =>{
          id = category.id;
          console.log(id);
          models
          .categories
          .update({
            name : params['newName']
          },{
            where : { id: id }
          });
        }
      );




      break;
    default:
      console.log('Undefined type');
  }



  res.render('index', { title: 'Express' });
});

module.exports = router;
