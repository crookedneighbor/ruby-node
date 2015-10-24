// $stdout
// comment outline
// Get the stdout!

import {
  each,
  isArray,
} from 'lodash';

// # Methods
// * [puts](#puts)
export default class $Stdout {
  constructor () {
    this.puts = puts;
  }
}

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
// If multiple strings are passed in, they'll be printed to stdout separated by new lines
//
// ```js
// puts('this', 'is', 'a', 'test');
// // this
// // is
// // a
// // test
// ```
//
// If an array is passed in, it'll be printed to stdout separated by new lines
//
// ```js
// puts(['this', 'is', 'a', 'test']);
// // this
// // is
// // a
// // test
// ```
function puts () {
  each(arguments, (arg) => {
    if (isArray(arg)) {
      each(arg, (element) => {
        console.log(element); // eslint-disable-line no-console
      });
    } else {
      console.log(arg); // eslint-disable-line no-console
    }
  });
}
