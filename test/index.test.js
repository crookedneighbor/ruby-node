import {
  each,
  functions,
} from 'lodash';

import ruby from  '../src/index';

import $Stdout from '../src/stdout';
import PercentStrings from '../src/percent_strings';

describe('ruby', () => {
  context('$stdout methods', () => {
    it('has stdout property', () => {
      expect(ruby.$stdout).to.be.an.instanceOf($Stdout);
    });

    each(functions(new $Stdout), (method) => {
      it(`responds to ${method}`, () => {
        expect(ruby).to.respondTo(method);
      });
    });
  });

  context('Percent Strings', () => {
    each(functions(new PercentStrings()), (method) => {
      it(`responds to ${method}`, () => {
        expect(ruby).to.respondTo(method);
      });
    });
  });
});
