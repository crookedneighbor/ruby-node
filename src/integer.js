'use strict';
// Integer
// calculator
// The final countdown.
const _times = require('lodash').times;
const isUndefined = require('lodash').isUndefined;

// # Methods
//
// * [even](#even)
// * [gcd](#gcd)
// * [gcdlcm](#gcdlcm)
// * [lcm](#lcm)
// * [next](#next)
// * [odd](#odd)
// * [pred](#pred)
// * [succ](#succ)
// * [times](#times)
// * [upto](#upto)
// * [to_i](#to_i)
//
// These can be called through the int object on ruby:
//
// ```js
// ruby.int.even(5); // false
// ```
//
// Or, if you call the `add_methods_to_number_prototype` method, you can call each applicable method as a property on any number.
//
// ```js
// ruby = require('ruby');
// ruby.add_methods_to_number_prototype();
//
// let number = 5;
// number.odd; // true
// ```
//
// **Note:** because Javascript will interpret a `.` after a number as a float, you cannot call the properties directly on the number or you will get a syntax error. Instead, you can call the property like this:
//
// ```js
// // set a variable
// let number = 5;
// number.odd; // true
//
// // use the .. notation
// 5..odd; // true
//
// // surround it in ()
// (5).odd; //true
// ```
//
// The examples below will always use the prototype version, unless otherwise specified.
module.exports = class _Integer {
  constructor () {
    this.even = even;
    this.even_questionmark = this.even;
    this.gcd = gcd;
    this.gcdlcm = gcdlcm;
    this.lcm = lcm;
    this.next = next;
    this.odd = odd;
    this.odd_questionmark = this.odd;
    this.pred = pred;
    this.succ = this.next;
    this.times = times;
    this.upto = upto;
    this.to_i = to_i;
  }
}

// # even
//
// Returns true if number is even.
//
// `even_questionmark` is an alias of `even`.
//
// ```js
// let is_even = (4).even;
// is_even; // true
//
// is_even = (5).even;
// is_even; // false
// ```
function even(num) {
  num = num || this;

  return num % 2 === 0;
}

// # gcd
//
// Returns the greatest common divisor (always positive).
//
// ```js
// (2).gcd(2); // 2
// (3).gcd(-7); // 1
// ```
//
// (0).gcd(x) and x.gcd(0) return abs(x).
//
// ```js
// (0).gcd(-7); // 7
// (7).gcd(0); // 7
// ```
function gcd(number_1, number_2) {
  if (isUndefined(number_1)) number_1 = this;

  if (number_2) {
    return gcd(number_2, number_1 % number_2);
  } else {
    return Math.abs(number_1);
  }
}

// # gcdlcm
//
// Returns an array. The first element is the greatest common divisor and the second is the least common multiple.
// ```js
// (2).gcdlcm(2); // [2, 2]
// (3).gcdlcm(-7); // [1, 21]
// ```
function gcdlcm(number_1, number_2) {
  if (isUndefined(number_1)) number_1 = this;

  let greatest_common_divisor = gcd(number_1, number_2);
  let least_common_multiple = lcm(number_1, number_2);

  return [greatest_common_divisor, least_common_multiple];
}

// # lcm
//
// Returns the least common multiple (always positive).
//
// ```js
// (2).lcm(2); // 2
// (3).lcm(-7); // 21
// ```
//
// (0).lcm(x) and x.lcm(0) return zero.
//
// ```js
// (0).gcd(-7); // 0
// (7).gcd(0); // 0
// ```
function lcm(number_1, number_2) {
  if (isUndefined(number_1)) number_1 = this;

  let top_of_equation = Math.abs(number_1 * number_2);
  let bottom_of_equation = gcd(number_1, number_2);

  return top_of_equation / bottom_of_equation;
}

// # next
//
// Returns the Integer equal to int + 1.
//
// `succ` is an alias for `next`.
//
// ```js
// let next_number = (1).next;
// next_number; // 2
//
// next_number = -(1).next;
// next_number; // 0
// ```
function next(num) {
  num = num || this;

  return num + 1;
}

// # odd
//
// Returns true if number is odd.
//
// `odd_questionmark` is an alias of `odd`.
//
// ```js
// let is_odd = (4).odd;
// is_odd; // true
//
// is_odd = (5).odd;
// is_odd; // false
// ```
function odd(num) {
  num = num || this;

  return num % 2 != 0;
}

// # pred
//
// Returns the Integer equal to int - 1.
//
// ```js
// let previous_number = (1).pred;
// previous_number; // 0
//
// previous_number = (-1).pred;
// previous_number; // -2
// ```
function pred(num) {
  num = num || this;

  return num - 1;
}

// # times
//
// As int is already a Number, all these methods simply return the receiver.
//
// ```js
// let x = [];
// let number = (5).times((n) => {
//   x.push(n);
// });
//
// x; // [0, 1, 2, 3, 4]
// ```
function times(num, block) {
  num = num || this;

  _times(num, block);
}

// # upto
//
// Iterates the given block, passing in integer values from int up to and including limit.
//
// ```js
// let x = [];
// let number = (5).upto(10, (n) => {
//   x.push(n);
// });
//
// x; // [5, 6, 7, 8, 9, 10]
// ```
function upto(original_number, upto_number, block) {
  original_number = original_number  || this;

  for (var i = original_number; i <= upto_number; i++) {
    block(i);
  }
}

// # to_i
//
// As int is already a Number, all these methods simply return the receiver.
//
// ```js
// let number = 1;
// number.to_i; // 1
// ```
function to_i(num) {
  num = num || this;

  return num;
}
