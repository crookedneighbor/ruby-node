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

    it('takes in an optional delimater', () => {
      let words = 'How|do|we|emerge|victorious from the quagmire?|Leave|the|battlefield|waving|Betsy Ross\’ flag higher?';
      let wordsArray = w(words, '|');

      expect(wordsArray).to.eql(['How', 'do', 'we', 'emerge', 'victorious from the quagmire?', 'Leave', 'the', 'battlefield', 'waving', 'Betsy Ross\’ flag higher?']);
    });
  });
});
