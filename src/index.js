// Ruby for Node
// diamond
// Helper methods from ruby ported to Node.

// NOOP
import { assign } from 'lodash';

import $Stdout from './stdout';
import PercentStrings from './percent_strings';

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
    // * [putc](stdout.html#putc)
    // * [puts](stdout.html#puts)
    this.$stdout = new $Stdout();
    assign(this, this.$stdout);

    // # Percent Strings - [Docs](percent_strings.html)
    //
    // * [w](percent_strings.html#w)
    // * [percent_w](percent_strings.html#percent_w)
    assign(this, new PercentStrings());

    // NOOP
  }
}

export default new Ruby();
