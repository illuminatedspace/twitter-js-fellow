const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {

  //gets all tweets!
  router.get('/', (req, res, next) => {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  //tweets for a specific user
  router.get('/users/:name', (req, res, next) => {
    const name = req.params.name;
    name.replace('%20', ' ');
    const tweets = tweetBank.find( {name} );
    res.render( 'index', { tweets, name, showForm: true } );
  });

  //page for just one tweet
  router.get('/tweets/:id', (req, res, next) => {
    const id = req.params.id;
    const tweets = tweetBank.find( {id: id} );
    res.render( 'index', { tweets } );
  });

  //create one tweet
  router.post('/tweets', (req, res, next) => {
    var name = req.body.name;
    var text = req.body.text;
    const tweet = tweetBank.add(name, text);
    io.sockets.emit('newTweet', tweet)
    res.redirect('/');
  });

  return router;
}
