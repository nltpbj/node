var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index.ejs', { title: '회사소개', pageName:'home.ejs' });// 그려주는것
});

module.exports = router;
