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

  describe('#gcd', () => {
    it('returns the greatest common divisor', () => {
      expect(number.gcd(2, 2)).to.eql(2);
      expect(number.gcd(3, 7)).to.eql(1);
    });

    it('always returns a positive number', () => {
      expect(number.gcd(-2, 2)).to.eql(2);
      expect(number.gcd(3, -7)).to.eql(1);
    });

    it('(0).gcd(x) returns x', () => {
      expect(number.gcd(0, 232)).to.eql(232);
    });

    it('(x).gcd(0) returns x', () => {
      expect(number.gcd(232, 0)).to.eql(232);
    });
  });

  describe('#lcm', () => {
    it('returns the least common multiple', () => {
      expect(number.lcm(2, 2)).to.eql(2);
      expect(number.lcm(3, 7)).to.eql(21);
    });

    it('always returns a positive number', () => {
      expect(number.lcm(-2, 2)).to.eql(2);
      expect(number.lcm(3, -7)).to.eql(21);
    });

    it('(0).lcm(x) returns zero', () => {
      expect(number.lcm(0, 232)).to.eql(0);
    });

    it('(x).lcm(0) returns zero', () => {
      expect(number.lcm(232, 0)).to.eql(0);
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

  describe('#succ', () => {
    it('is an alias for #next', () => {
      expect(number.succ).to.eql(number.next);
    });
  });

  describe('#times', () => {
    it('Iterates the given block n times, passing in values from zero to n - 1', () => {
      let x = [];

      number.times(5, (n) => {
        x.push(n);
      });

      expect(x).to.eql([0, 1, 2, 3, 4]);
    });
  });

  describe('#upto', () => {
    it('Iterates the given block, passing in integer values from int up to and including limit.', () => {
      let x = [];

      number.upto(5, 10, (n) => {
        x.push(n);
      });

      expect(x).to.eql([5, 6, 7, 8, 9, 10]);
    });
  });

  describe('#to_i', () => {
    it('returns the number', () => {
      let num = number.to_i(1);
      expect(num).to.eql(1);
    });
  });
});
