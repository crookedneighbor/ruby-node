// Top Level Methods
// arrow up
// Ruby-like helper methods.

import {each} from 'lodash';

// # puts()
//
// Sends the string to stdout
//
// ```js
// import {puts} from 'ruby';
//
// puts('this is a test');
// // this is a test
// ```
//
// If multiple strings are passed in, they'll be printed to stdout
// separated by new lines
//
// ```js
// puts('this', 'is', 'a', 'test');
// // this
// // is
// // a
// // test
// ```
export function puts () {
  each(arguments, (arg) => {
    console.log(arg); // eslint-disable-line no-console
  });
};

// # w()
//
// Inspired by Ruby's [`%w`](link).
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
// Takes an options hash where you can specify a specific delimeter.
//
// ```js
// let my_shot = 'I am not throwing away my shot.';
// let words = w(my_shot, { delimiter: 'not' });
// words; // ['I am ', ' throwing away my shot.'];
// ```
export function w (words, options={}) {
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
export var percent_w = w;
