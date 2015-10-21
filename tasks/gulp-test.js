import gulp from 'gulp';
import {resolve} from 'path';
import {sync as glob} from 'glob';
import Mocha from 'mocha';

require('../test/support/globals');

gulp.task('test', (done) => {
  let mocha = new Mocha();
  let tests = glob('./test/unit/**/*.js');

  tests.forEach((test) => {
    delete require.cache[resolve(test)];
    mocha.addFile(test);
  });

  mocha.run(() => {
    done();
  });
});

gulp.task('test:watch', ['test'], () => {
  gulp.watch(['src/**', 'test/**/*.js'], ['test']);
});
