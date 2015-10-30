import {
  each,
  functions,
} from 'lodash';

import ruby from  '../src/index';

import $Stdout from '../src/stdout';
import _String from '../src/string';
import PercentStrings from '../src/percent_strings';

describe('ruby', () => {
  context('$stdout methods', () => {
    it('has an stdout property', () => {
      expect(ruby.$stdout).to.be.an.instanceOf($Stdout);
    });

    each(functions(new $Stdout), (method) => {
      it(`has a method named ${method}`, () => {
        expect(ruby[method]).to.be.a('function');
      });
    });
  });

  context('string methods', () => {
    it('has a str property', () => {
      expect(ruby.str).to.be.an.instanceOf(_String);
    });
  });

  context('Percent Strings', () => {
    each(functions(new PercentStrings()), (method) => {
      it(`responds to ${method}`, () => {
        expect(ruby).to.respondTo(method);
      });
    });
  });

  describe('#add_string_methods_to_prototype', () => {
    ruby.add_methods_to_string_prototype();

    each(functions(new _String()), (method) => {
      it(`adds ${method} property to the String prototype`, () => {
        let str = 'str';
        expect(str).to.have.property(method);
      });
    });
  });
});
