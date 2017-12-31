'use strict';
// $stdout
// comment outline
// Get the stdout!

/* eslint-disable no-console */

const each = require('lodash').each;
const isArray = require('lodash').isArray;
const isBoolean = require('lodash').isBoolean;
const isNull = require('lodash').isNull;
const isNumber = require('lodash').isNumber;
const isObject = require('lodash').isObject;
const isPlainObject = require('lodash').isPlainObject;
const isRegExp = require('lodash').isRegExp;
const isString = require('lodash').isString;
const isUndefined = require('lodash').isUndefined;

// # Methods
// * [putc](#putc)
// * [puts](#puts)
module.exports = class $Stdout {
  constructor () {
    this.putc = putc;
    this.puts = puts;
  }
}

// # putc()
//
// ```js
// import { putc } from 'ruby';
// ```
//
// Prints a character to stdout. Only prints the first letter of the string and only takes in a single string or number.
//
// ```js
// putc('ABC');
// // A
// ```
//
// Prints the character equivalent of the number that is passed in.
//
// ```js
// putc(65);
// // A
// ```
//
// Does not print new new lines.
//
// ```js
// putc('A');
// putc('B');
// putc('C');
// // ABC
// ```
//
// Returns the original argument
//
// ```js
// let word = putc('ABC');
// word; // 'ABC'
// ```
function putc (arg) {
  if (arguments.length !== 1) {
    throw `ArgumentError: wrong number of arguments (${arguments.length} for 1)`;
  }

  if (!(isNumber(arg) || isString(arg))) {
    throw `no implicit conversion of ${typeof arg} into Integer (TypeError)`;
  }

  let output;

  if (isString(arg)) {
    output = arg.slice(0, 1);
  } else {
    output = String.fromCharCode(arg);
  }

  process.stdout.write(output);

  return arg;
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
