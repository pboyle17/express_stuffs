var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        blurb: 'we are going to make a table viewer for chicago charitable games'
                      });
});

module.exports = router;
