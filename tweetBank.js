const _ = require('lodash');

const _data = [{
  name: 'Ada Lovelace',
  content: 'Grace Hopper is Amazing! The instructors are just so kind. #ghlove #codedreams',
  id: 1815
}
];

function add (name, content, id) {
  _data.push({ name: name, content: content, id: id})
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
  module.exports.add( getFakeName(), getFakeTweet(), i);
}

//testing seed data
// console.log(_data);
add('Liz Phillips', "I'm here too!!!", 19);
// console.log("FOUND!", find({name: "Liz Phillips"}));
// console.log(list());
