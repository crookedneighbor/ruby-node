import { stdoutTrap } from 'logtrap';
import $Stdout from '../src/stdout';
let $stdout = new $Stdout;

describe('$stdout', () => {
  describe('#putc', () => {
    it('outputs a character', () => {
      let capturedStdout = stdoutTrap(() => {
        $stdout.putc('A');
      });

      expect(capturedStdout).to.eql('A');
    });

    it('prints just the first character', () => {
      let capturedStdout = stdoutTrap(() => {
        $stdout.putc('AA');
      });

      expect(capturedStdout).to.eql('A');
    });

    it('converts number to character equivalent', () => {
      let capturedStdout = stdoutTrap(() => {
        $stdout.putc(65);
      });

      expect(capturedStdout).to.eql('A');
    });

    it('converts hexadecimal to character equivalent', () => {
      let capturedStdout = stdoutTrap(() => {
        $stdout.putc(0xA);
      });

      expect(capturedStdout).to.eql('\n');
    });

    it('does not print a new line character automatically', () => {
      let capturedStdout = stdoutTrap(() => {
        $stdout.putc('A');
        $stdout.putc('B');
        $stdout.putc('C');
      });

      expect(capturedStdout).to.eql('ABC');
    });

    it('returns the original argument', () => {
      let argument;
      let capturedStdout = stdoutTrap(() => {
        argument = $stdout.putc('ABC');
      });

      expect(argument).to.eql('ABC');
    });

    it('throws an error if no argument is passed in', () => {
      expect(() => {
        $stdout.putc();
      }).to.throw('ArgumentError: wrong number of arguments (0 for 1)');
    });

    it('throws an error if more than one argument is passed in', () => {
      expect(() => {
        $stdout.putc('a', 'b');
      }).to.throw('ArgumentError: wrong number of arguments (2 for 1)');
    });

    it('throws an error if an argument other than a string or number is passed in', () => {
      expect(() => {
        $stdout.putc(true);
      }).to.throw('no implicit conversion of boolean into Integer (TypeError)');
    });
  });

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

      it('outputs the value of the string if instantated with the new keyword', () => {
        let newString = new String('this is a test');
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(newString);
        });

        expect(capturedStdout).to.eql('this is a test\n');
      });
    });

    context('numbers', () => {
      it('outputs string version of number to stdout', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(10);
        });

        expect(capturedStdout).to.eql('10\n');
      });

      it('outputs the string version of the number if instantated with the new keyword', () => {
        let newNumber = new Number(10);
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(newNumber);
        });

        expect(capturedStdout).to.eql('10\n');
      });
    });

    context('booleans', () => {
      it('outputs string version of true', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(true);
        });

        expect(capturedStdout).to.eql('true\n');
      });

      it('outputs the string version of the boolean if instantated with the new keyword', () => {
        let newNumber = new Boolean(true);
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(newNumber);
        });

        expect(capturedStdout).to.eql('true\n');
      });
    });

    context('null', () => {
      it('outputs an empty string', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(null);
        });

        expect(capturedStdout).to.eql('\n');
      });
    });

    context('undefined', () => {
      it('outputs an empty string', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(undefined); // eslint-disable-line no-undefined
        });

        expect(capturedStdout).to.eql('\n');
      });
    });

    context('NaN', () => {
      it('outputs NaN as a string', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(NaN);
        });

        expect(capturedStdout).to.eql('NaN\n');
      });

      it('outputs NaN as a string when passing in an invalid mathematical expression', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(0/0);
        });

        expect(capturedStdout).to.eql('NaN\n');
      });
    });

    context('Error', () => {
      it('outputs the error', () => {
        let capturedStdout = stdoutTrap(() => {
          let error = new Error();
          $stdout.puts(error);
        });

        expect(capturedStdout).to.eql('Error\n');
      });

      it('outputs the error message if present', () => {
        let capturedStdout = stdoutTrap(() => {
          let error = new Error('this is a test');
          $stdout.puts(error);
        });

        expect(capturedStdout).to.eql('this is a test\n');
      });

      it('outputs the error class name if it extends error', () => {
        let capturedStdout = stdoutTrap(() => {
          class CustomError extends Error {
            constructor (arg) {
              super();
              this.name = 'Custom Error';
              this.message = arg;
            }
          };
          let error = new CustomError();
          $stdout.puts(error);
        });

        expect(capturedStdout).to.eql('Custom Error\n');
      });

      it('outputs the error message of an error that extends Error', () => {
        let capturedStdout = stdoutTrap(() => {
          class CustomError extends Error {
            constructor (arg) {
              super();
              this.name = 'Custom Error';
              this.message = arg;
            }
          };
          let error = new CustomError('this is a test');
          $stdout.puts(error);
        });

        expect(capturedStdout).to.eql('this is a test\n');
      });
    });

    context('regex', () => {
      it('outputs a specially formatted string version of the regex', () => {
        let capturedStdout = stdoutTrap(() => {
          let regex = /^this is a test$/;
          $stdout.puts(regex);
        });

        expect(capturedStdout).to.eql('(?-mix:^this is a test$)\n');
      });

      it('outputs a specially formatted string version of the regex when the new keyword is used', () => {
        let capturedStdout = stdoutTrap(() => {
          let regex = new RegExp('^this is a test$');
          $stdout.puts(regex);
        });

        expect(capturedStdout).to.eql('(?-mix:^this is a test$)\n');
      });
    });

    context('arrays', () => {
      it('outputs to stdout separated by new lines', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(['this', 'is', 'a', 'test']);
        });

        expect(capturedStdout).to.eql('this\nis\na\ntest\n');
      });

      it('handles special input types correctly', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(['this', 10, $stdout, ['a', 'test', 0]]);
        });

        expect(capturedStdout).to.eql('this\n10\n#<$Stdout>\na\ntest\n0\n');
      });
    });

    context('functions', () => {
      it('prints the anonymous function\'s class', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(function () { return true; });
        });

        expect(capturedStdout).to.eql('#<Function>\n');
      });

      it('prints the named function\'s class', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts(function name () { return true; });
        });

        expect(capturedStdout).to.eql('#<Function>\n');
      });
    });

    context('objects', () => {
      it('outputs a plain object as a string', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts({this_is: 'a test'});
        });

        expect(capturedStdout).to.eql('{ this_is: \'a test\' }\n');
      });

      xit('@TODO: impliment this - outputs nested object as a string', () => {
        let capturedStdout = stdoutTrap(() => {
          let giant_nested_object = {
            t: {
              his: {
                a: {
                  t: {
                    est: 'this is a test',
                  },
                },
              },
            },
          };
          $stdout.puts(giant_nested_object);
        });

        expect(capturedStdout).to.eql('{ t: { his: { a: { t: { est: \'this is a test\' } } } } }\n');
      });

      xit('@TODO: impliment this - prints special values appropriately');
    });

    context('instance of a class', () => {
      it('outputs out the class name', () => {
        let capturedStdout = stdoutTrap(() => {
          let instanceOfStdout = new $Stdout();
          $stdout.puts(instanceOfStdout);
        });

        expect(capturedStdout).to.eql('#<$Stdout>\n');
      });
    });

    context('multiple arguments', () => {
      it('outputs multiple string arguments to stdout separated by new lines', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts('this', 'is', 'a', 'test');
        });

        expect(capturedStdout).to.eql('this\nis\na\ntest\n');
      });

      it('handles each argument type correctly when multiple are passed in', () => {
        let capturedStdout = stdoutTrap(() => {
          $stdout.puts('this', 10, $stdout, ['a', 'test', 0]);
        });

        expect(capturedStdout).to.eql('this\n10\n#<$Stdout>\na\ntest\n0\n');
      });
    });
  });
});
