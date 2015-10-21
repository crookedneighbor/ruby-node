import {
  w,
} from '../src/lib/w';

describe('w', () => {
  describe('#w', () => {
    it('transforms words into an array', () => {
      let words = 'these are some words';
      let wordsArray = w(words);

      expect(wordsArray).to.eql(['these', 'are', 'some', 'words']);
    });
  });
});
