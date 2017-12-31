'use strict';
// String
// write
// All strings attached!
const _times = require('lodash').times;

// # Methods
//
// * [chars](#chars)
// * [downcase](#downcase)
// * [empty](#empty)
// * [reverse](#reverse)
// * [upcase](#upcase)
//
// These can be called through the str object on ruby:
//
// ```js
// ruby.str.downcase('hEllO'); // hello
// ```
//
// Or, if you call the `add_methods_to_string_prototype` method, you can call each applicable method as a property on any string.
//
// ```js
// ruby = require('ruby');
// ruby.add_methods_to_string_prototype();
//
// 'hEllO'.downcase; // hello
// ```
//
// The examples below will always use the prototype version, unless otherwise specified.
module.exports = class _String {
  constructor () {
    this.chars = chars;
    this.downcase = downcase;
    this.empty = empty;
    this.empty_questionmark = this.empty;
    this.reverse = reverse;
    this.upcase = upcase;
  }

  // # new
  //
  // Creates a new string.
  //
  // Only available on `ruby.str`, not as a method on an instance of `String`.
  //
  // ```js
  // let new_string = ruby.str.new('abc');
  // new_string; // 'abc'
  // ```
  new (str) {
    return `${str}`;
  }

// NOOP
}

// # chars
//
// Returns the characters of the string in an array.
//
// ```js
// let chars = 'abc'.chars;
// chars; // ['a', 'b', 'c']
// ```
function chars(str) {
  str = str || this;

  return str.split('');
}

// # downcase
//
// Returns the string with all lowercase letters.
//
// ```js
// let str = 'hEllO'.downcase;
// str; // 'hello'
// ```
function downcase(str) {
  str = str || this;

  return str.toLowerCase();
}

// # empty
//
// Returns true if the string is empty and false if it is not.
//
// ```js
// 'hello'.empty; // false
// ' '.empty; // false
// ''.empty; // true
// ```
//
// `empty_questionmark` is an alias for `empty`.
function empty(str) {
  if (str === undefined) { // eslint-disable-line no-undefined
    str = this;
  }

  return str.length === 0;
}

// # reverse
//
// Returns the string in reverse order.
//
// ```js
// let str = 'stressed'.reverse;
// str; // 'desserts'
// ```
function reverse(str) {
  str = str || this;

  let parts = str.split('');
  let reversedParts = parts.reverse();
  let reversed = reversedParts.join('');

  return reversed;
}

// # upcase
//
// Returns the string with all uppercase letters.
//
// ```js
// let str = 'hEllO'.upcase;
// str; // 'HELLO'
// ```
function upcase(str) {
  str = str || this;

  return str.toUpperCase();
}
