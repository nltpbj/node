var express = require('express');
var router = express.Router();

/* 도서 검색 */
router.get('/', function(req, res, next) { 
  res.render('index', { title: '도서 검색', pageName:'book/search.ejs' });
});

module.exports = router;
