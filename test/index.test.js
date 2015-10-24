import {
  each,
  functions,
} from 'lodash';

import ruby from  '../src/index';

import $Stdout from '../src/stdout';

describe('ruby', () => {
  context('$stdout', () => {
    it('has stdout property', () => {
      expect(ruby.$stdout).to.be.an.instanceOf($Stdout);
    });

    each(functions(new $Stdout), (method) => {
      it(`responds to ${method}`, () => {
        expect(ruby).to.respondTo(method);
      });
    });
  });

  context('top level methods', () => {
    const top_level_methods = [
      'w',
      'percent_w',
    ];

    each(top_level_methods, (method) => {
      it(`responds to ${method}`, () => {
        expect(ruby).to.respondTo(method);
      });
    });
  });
});
