var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: '박병준의 홈페이지', pageName:'home.ejs' });
});

module.exports = router;
