# Ruby-Node
[![Build Status](https://travis-ci.org/crookedneighbor/ruby-node.svg?branch=master)](https://travis-ci.org/crookedneighbor/ruby-node)
---

Helper methods from ruby ported to Node.

## Getting Started

```bash
npm install ruby --save
```

```js
let r = require('ruby');

let words = r.w('I am not throwing away my shot!');
words; // ['I', 'am', 'not', 'throwing', 'away', 'my', 'shot!']
```

For more info, [read the docs](http://crookedneighbor.github.io/ruby-node/)

## Tests

```bash
npm t
```
