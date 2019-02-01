const express = require('express');
const router = express.Router();
const posts = require('../posts');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('posts', {
    title: 'All Posts',
    posts: posts
  })
});

module.exports = router;
