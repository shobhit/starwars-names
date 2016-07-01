var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./starwar_names.json');
module.exports ={
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
