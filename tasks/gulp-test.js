'use strict';

let gulp = require('gulp');
let resolve = require('path').resolve;
let glob = require('glob').sync;
let Mocha = require('mocha');

require('../test/support/globals');

gulp.task('test', (done) => {
  let mocha = new Mocha();
  let tests = glob('./test/**/*.js');

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
