var express = require('express');
var router = express.Router();

/* 블로그검색 */
router.get('/', function(req, res, next) { 
  res.render('index.ejs', { title: '블로그검색', pageName:'blog/search.ejs' });// 그려주는것
});

module.exports = router;
