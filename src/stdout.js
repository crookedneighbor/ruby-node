// $stdout
// comment outline
// Get the stdout!

import {each} from 'lodash';

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
function puts () {
  each(arguments, (arg) => {
    console.log(arg); // eslint-disable-line no-console
  });
}
