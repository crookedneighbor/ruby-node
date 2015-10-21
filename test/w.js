import {
  w,
} from '../src/lib/w';

describe('w', () => {
  describe('#w', () => {
    it('transforms words into an array', () => {
      let words = 'How does a ragtag volunteer army in need of a shower somehow defeat a global superpower?';
      let wordsArray = w(words);

      expect(wordsArray).to.eql(['How', 'does', 'a', 'ragtag', 'volunteer', 'army', 'in', 'need', 'of', 'a', 'shower', 'somehow', 'defeat', 'a', 'global', 'superpower?']);
    });
  });
});
