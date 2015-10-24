// Ruby for Node
// diamond
// Helper methods from ruby ported to Node.

// NOOP
import { assign } from 'lodash';

import $Stdout from './stdout';
import {
  w,
  percent_w,
} from './top_level_methods';

// # Getting Started
//
// ```bash
// npm install ruby --save
// ```
//
// ```js
// let r = require('ruby');
//
// let words = r.w('I am not throwing away my shot!');
// words; // ['I', 'am', 'not', 'throwing', 'away', 'my', 'shot!']
// ```

// NOOP
class Ruby {
  constructor() {

    // # $stdout - [Docs](stdout.html)
    //
    // A collection of methods that output to stdout. All the methods
    // are available both on the $stdout object and as standalone methods.
    //
    // * [puts](stdout.html#puts)
    this.$stdout = new $Stdout();
    assign(this, this.$stdout);

    // # Top Level Methods - [Docs](top_level_methods.html)
    //
    // * [w](top_level_methods.html#w)
    // * [percent_w](top_level_methods.html#percent_w)
    this.w = w;
    this.percent_w = percent_w;

    // NOOP
  }
}

export default new Ruby();
