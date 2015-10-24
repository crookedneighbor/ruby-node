import { stdoutTrap } from 'logtrap';
import {
  puts,
  w,
  percent_w,
} from '../src/top_level_methods';

describe('Top Level Methods', () => {
  describe('#puts', () => {
    context('strings', () => {
      it('outputs string to stdout', () => {
        let capturedStdout = stdoutTrap(() => {
          puts('this is a test');
        });

        expect(capturedStdout).to.eql('this is a test\n');
      });

      it('outputs multiple string arguments to stdout separated by new lines', () => {
        let capturedStdout = stdoutTrap(() => {
          puts('this', 'is', 'a', 'test');
        });

        expect(capturedStdout).to.eql('this\nis\na\ntest\n');
      });
    });
  });

  describe('#w', () => {
    it('transforms words into an array', () => {
      let words = 'How does a ragtag volunteer army in need of a shower somehow defeat a global superpower?';
      let wordsArray = w(words);

      expect(wordsArray).to.eql(['How', 'does', 'a', 'ragtag', 'volunteer', 'army', 'in', 'need', 'of', 'a', 'shower', 'somehow', 'defeat', 'a', 'global', 'superpower?']);
    });

    it('takes in an optional delimiter', () => {
      let words = 'How|do|we|emerge|victorious from the quagmire?|Leave|the|battlefield|waving|Betsy Ross\’ flag higher?';
      let wordsArray = w(words, { delimiter: '|' });

      expect(wordsArray).to.eql(['How', 'do', 'we', 'emerge', 'victorious from the quagmire?', 'Leave', 'the', 'battlefield', 'waving', 'Betsy Ross\’ flag higher?']);
    });
  });

  describe('#percent_w', () => {
    it('is an alias for #w', () => {
      expect(percent_w).to.eql(w);
    });
  });
});
