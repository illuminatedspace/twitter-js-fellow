const _ = require('lodash');

const _data = [{
  name: 'Ada Lovelace',
  content: 'Grace Hopper is Amazing! The instructors are just so kind. #ghlove #codedreams',
  id: '1815'
}
];

function add (name, content) {
  const tweet = { name: name, content: content, id: guid()}
  _data.push(tweet)
  return tweet
}

function list () {
  return _.cloneDeep(_data);
}

function find (properties) {
  return _.cloneDeep(_.filter(_data, properties));
}

module.exports = {
  add,
  list,
  find
}

//SEED DATA
const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function guid () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4()}`;
}

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet(), guid());
}

//testing seed data
// console.log(_data);
add('Liz Phillips', "I'm here too!!!", 19);
// console.log("FOUND!", find({name: "Liz Phillips"}));
// console.log(list());
