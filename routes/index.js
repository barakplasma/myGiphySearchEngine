var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.giphyapikey;

function giphySearchURL(query) {
    return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1&offset=0&rating=G&lang=en`;
}

function fetchFirstGiphyResult(query) {
    return fetch(`${giphySearchURL(query)}`)
        .then(res=>res.json())
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Giphy Search Engine' });
});

router.get('/api/search',function (req, res, next) {
    console.log(apiKey);
  console.log(req.query.query);
  fetchFirstGiphyResult(req.query.query)
      .then(fetchedData => res.render('result', {imageURL:fetchedData.data[0].images.preview_gif.url}))
})

module.exports = router;
