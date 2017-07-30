var express = require('express');
var router = express.Router();
const giphySearcher = require('../../giphyFeelingLucky/src/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Giphy Search Engine' });
});

router.get('/api/search',function (req, res, next) {
  console.log(req.query.query);
  giphySearcher.fetchFirstGiphyResult(req.query.query)
      .then(fetchedData => res.render('result', {imageURL:fetchedData.data[0].images.preview_gif.url}))
})

module.exports = router;
