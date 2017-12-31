const PercentStrings = require('../src/percent_strings');
let ps = new PercentStrings();

describe('Percent Strings', () => {
  describe('#w', () => {
    it('transforms words into an array', () => {
      let words = 'foo bar baz';
      let wordsArray = ps.w(words);

      expect(wordsArray).to.eql(['foo', 'bar', 'baz']);
    });

    it('takes in an optional delimiter', () => {
      let words = 'foo|bar|baz';
      let wordsArray = ps.w(words, { delimiter: '|' });

      expect(wordsArray).to.eql(['foo', 'bar', 'baz']);
    });
  });

  describe('#percent_w', () => {
    it('is an alias for #w', () => {
      expect(ps.percent_w).to.eql(ps.w);
    });
  });
});
