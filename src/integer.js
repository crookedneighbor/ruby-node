// Integer
// calculator
// The final countdown.

// # Methods
//
// * [even](#even)
// * [next](#next)
// * [odd](#odd)
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
// 5.odd; // true
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
  }
}

// # even
//
// Returns true if number is even.
//
// `even_questionmark` is an alias of `even`.
//
// ```js
// let is_even = 4.even;
// is_even; // true
//
// is_even = 5.even;
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
// ```js
// let next_number = 1.next;
// next_number; // 2
//
// next_number = -1.next;
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
// let is_odd = 4.odd;
// is_odd; // true
//
// is_odd = 5.odd;
// is_odd; // false
// ```
function odd(num) {
  num = num || this;

  return num % 2 != 0;
}
