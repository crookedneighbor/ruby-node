'use strict';

const _String = require('../src/string');
let string = new _String;

describe('String', () => {
  describe('#chars', () => {
    it('returns an array of the characters of the string', () => {
      let chars = string.chars('abc');
      expect(chars).to.eql(['a', 'b', 'c']);
    });
  });

  describe('#downcase', () => {
    it('returns the string in all lowercase letters', () => {
      let str = string.downcase('hEllO');
      expect(str).to.eql('hello');
    });
  });

  describe('#empty', () => {
    it('returns true if string is empty', () => {
      let is_empty = string.empty('');
      expect(is_empty).to.eql(true);
    });

    it('returns false if string is not empty', () => {
      let is_empty = string.empty('hello');
      expect(is_empty).to.eql(false);
    });

    it('returns false if string is a blank space', () => {
      let is_empty = string.empty(' ');
      expect(is_empty).to.eql(false);
    });
  });

  describe('#empty_questionmark', () => {
    it('is an alias for empty', () => {
      expect(string.empty_questionmark).to.eql(string.empty);
    });
  });

  describe('#new', () => {
    it('creates a new string', () => {
      let aNewString = string.new('str');
      expect(aNewString).to.eql('str');
    });
  });

  describe('#reverse', () => {
    it('it reverses the string', () => {
      let reversedString = string.reverse('stressed');
      expect(reversedString).to.eql('desserts');
    });
  });

  describe('#upcase', () => {
    it('returns the string in all lowercase letters', () => {
      let str = string.upcase('hEllO');
      expect(str).to.eql('HELLO');
    });
  });
});
