import { stdoutTrap } from 'logtrap';
import $Stdout from '../src/stdout';
let $stdout = new $Stdout;

describe('$stdout', () => {
  describe('#puts', () => {
    context('strings', () => {
      it('outputs string to stdout', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts('this is a test');
        });

        expect(capturedStdout).to.eql('this is a test\n');
      });

      it('outputs multiple string arguments to stdout separated by new lines', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts('this', 'is', 'a', 'test');
        });

        expect(capturedStdout).to.eql('this\nis\na\ntest\n');
      });
    });
  });
});
