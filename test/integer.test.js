import _Integer from '../src/integer';
let number = new _Integer;

describe('Integer', () => {
  describe('#even', () => {
    it('returns true if number is even', () => {
      let num = number.even(6);
      expect(num).to.eql(true);
    });

    it('returns false if number is not even', () => {
      let num = number.even(5);
      expect(num).to.eql(false);
    });
  });

  describe('#odd', () => {
    it('returns true if number is odd', () => {
      let num = number.odd(5);
      expect(num).to.eql(true);
    });

    it('returns false if number is not odd', () => {
      let num = number.odd(6);
      expect(num).to.eql(false);
    });
  });
});
