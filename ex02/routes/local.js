var express = require('express');
var router = express.Router();

/* 지역검색 */
router.get('/', function(req, res, next) { 
  res.render('index.ejs', { title: '지역검색', pageName:'local/search.ejs' });// 그려주는것
});

module.exports = router;
