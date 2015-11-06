// Integer
// calculator
// The final countdown.
import {
  times as _times,
} from 'lodash';

// # Methods
//
// * [even](#even)
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
export default class _Integer {
  constructor () {
    this.even = even;
    this.even_questionmark = this.even;
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
