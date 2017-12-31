'use strict';

const each = require('lodash').each;
const functions = require('lodash').functions;

const ruby = require('../src/index');

const $Stdout = require('../src/stdout');
const _Integer = require('../src/integer');
const _String = require('../src/string');
const PercentStrings = require('../src/percent_strings');

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

  context('integer methods', () => {
    it('has a int property', () => {
      expect(ruby.int).to.be.an.instanceOf(_Integer);
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

  describe('#add_methods_to_number_prototype', () => {
    ruby.add_methods_to_number_prototype();

    each(functions(new _Integer()), (method) => {
      it(`adds ${method} property to the Integer prototype`, () => {
        let num = 5;
        expect(num).to.have.property(method);
      });
    });
  });

  describe('#add_methods_to_string_prototype', () => {
    ruby.add_methods_to_string_prototype();

    each(functions(new _String()), (method) => {
      it(`adds ${method} property to the String prototype`, () => {
        let str = 'str';
        expect(str).to.have.property(method);
      });
    });
  });
});
