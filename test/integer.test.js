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

  describe('#even_questionmark', () => {
    it('is an alias for #even', () => {
      expect(number.even_questionmark).to.eql(number.even);
    });
  });

  describe('#next', () => {
    it('returns the number incremented by one', () => {
      let num = number.next(1);
      expect(num).to.eql(2);
    });

    it('returns the negative number incremented by one', () => {
      let num = number.next(-1);
      expect(num).to.eql(0);
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

  describe('#odd_questionmark', () => {
    it('is an alias for #odd', () => {
      expect(number.odd_questionmark).to.eql(number.odd);
    });
  });

  describe('#pred', () => {
    it('returns the number incremented by one', () => {
      let num = number.pred(1);
      expect(num).to.eql(0);
    });

    it('returns the negative number incremented by one', () => {
      let num = number.pred(-1);
      expect(num).to.eql(-2);
    });
  });
});
