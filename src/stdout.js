// $stdout
// comment outline
// Get the stdout!

/* eslint-disable no-console */

import {
  each,
  isArray,
  isBoolean,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isRegExp,
  isString,
  isUndefined,
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
// ```js
// import {puts} from 'ruby';
// ```
//
// ### Strings
//
// Prints the string to stdout
//
// ```js
// puts('this is a test');
// // this is a test
// ```
//
// ### Numbers
//
// Prints the number to stdout
//
// ```js
// puts(10);
// // 10
// ```
//
// ### Boolean
//
// Prints the boolean to stdout
//
// ```js
// puts(true);
// // true
// ```
//
// ### Regex
//
// Prints the regex in the form (?-mix:the_regex)
//
// ```js
// let regex = /^this is a test$/;
// puts(regex);
// // (?-mix:^this is a test$)
// ```
//
// ### Undefined or Null
//
// Prints an empty string to stdout
//
// ```js
// puts(null);
// // ''
//
// puts(undefined);
// // ''
// ```
//
// ### NaN
//
// Prints the string NaN
//
// ```js
// puts(NaN);
// // NaN
//
// puts(0/0);
// // NaN
// ```
//
// ### Error
//
// Prints the string NaN
//
// ```js
// puts(NaN);
// // NaN
//
// puts(0/0);
// // NaN
// ```
//
// ### Arrays
// Prints each element to stdout on a new line
//
// ```js
// puts(['this', 'is', 'a', 'test']);
// // this
// // is
// // a
// // test
// ```
//
// ### Plain Objects
// Prints the string version of objects that inherit directly from the Object prototype
//
// ```js
// puts({this_is: 'a test'});
// // { this_is: 'a test' }
// ```
//
// ### Other Objects
// Prints the object's construtor's name in the form: `#<ClassName>`. Unfortunately, javascript does not expose the memory location of the object, so that can not be added as a reference id to the ouput.
//
// ```js
// puts(ruby.$stdout);
// // #<$Stdout>
// ```
//
// ### Functions
// Prints the function's construtor's name in the form: `#<Name>`.
//
// ```js
// puts(function () { return 'this is a test'});
// // #<Function>
// ```
//
// ### Multiple Arguments
// If multiple arguments are passed in, they'll be printed to stdout separated by new lines
//
// ```js
// puts('this', 'is', 'a', 'test', ruby.$stdout);
// // this
// // is
// // a
// // test
// // #<$Stdout>
// ```
function puts () {
  each(arguments, (arg) => {
    if (isString(arg) || isNumber(arg) || isBoolean(arg)) {
      _printWithNewLine(String(arg));
    } else if (isNull(arg) || isUndefined(arg)) {
      _printWithNewLine('');
    } else if (isRegExp(arg)) {
      let stringifiedRegEx = _convertRegexToString(arg);
      _printWithNewLine(stringifiedRegEx);
    } else if (arg instanceof Error) {
      let stringifiedError = _convertErrorToString(arg);
      _printWithNewLine(stringifiedError);
    } else if (isArray(arg)) {
      each(arg, (element) => {
        puts(element);
      });
    } else if (!isPlainObject(arg) && isObject(arg)) {
      _printWithNewLine(`#<${arg.constructor.name}>`);
    } else {
      console.log(arg); // hack to make plain objects print semi-correctly
    }
  });
}

// NOOP
function _printWithNewLine (arg) {
  process.stdout.write(`${arg}\n`);
}

function _convertRegexToString(regex) {
  let str = String(regex);
  str = str.slice(1, -1);
  return `(?-mix:${str})`;
}

function _convertErrorToString(error) {
  if (error.message) return error.message;
  return String(error);
}
