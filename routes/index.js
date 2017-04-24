const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

//gets all tweets!
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets)
  res.render( 'index', { tweets: tweets, showForm: true } );
});

//tweets for a specific user
router.get('/users/:name', function(req, res) {
  const name = req.params.name;
  name.replace('%20', ' ');
  const list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

//page for just one tweet
router.get('/tweets/:id', function(req, res) {
  const id = +req.params.id;
  console.log(`IDDDDDDDD ${id}`)
  const list = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: list } );
});

//create one tweet
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
