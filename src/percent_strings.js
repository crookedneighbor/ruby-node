'use strict';
// Percent Strings
// asterisk
// Only a percent of a string.

// # Methods
// Inspired by Ruby's [Percent Strings](http://ruby-doc.org/core-2.0.0/doc/syntax/literals_rdoc.html#label-Percent+Strings)
//
// * [w](#w)
// * [percent_w](#percent_w)
module.exports = class PercentStrings {
  constructor () {
    this.w = w;
    this.percent_w = percent_w;
  }
}

// # w()
//
// Inspired by Ruby's `%w`.
//
// Takes in a string as an argument and converts it to an array, deliminated by spaces.
//
// ```js
// import {w} from 'ruby';
//
// let words = w('Hercules Mulligan!');
// words; // ['Hercules', 'Mulligan!'];
// ```
//
// Takes an options hash where you can specify a specific delimeter. Use this if you need an element to contain whitespaces, as escaping the white space character will not work.
//
// ```js
// let my_shot = 'I am not throwing away my shot.';
// let words = w(my_shot, { delimiter: 'not' });
// words; // ['I am ', ' throwing away my shot.'];
// ```
function w (words, options={}) {
  let delimiter = options.delimiter || ' ';
  let wordsArray = words.split(delimiter);

  return wordsArray;
}

// # percent_w()
//
// An alias for w. Javascript doesn't allow methods to start with a `%` sign 😢
//
// ```js
// import {percent_w} from 'ruby';
//
// let you_say = percent_w('You say the price of my love\'s not a price that you\'re willing to pay.');
// you_say; // ['You', 'say', 'the', 'price', 'of', 'my', 'love\'s', 'not', 'a', 'price', 'that', 'you\'re', 'willing', 'to', 'pay.']
// ```
let percent_w = w;
