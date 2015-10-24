import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';

const SOURCE = 'src/**/*.js';
const DIST = 'dist/';

gulp.task('babel', ['babel:clean'], () => {
  return gulp.src(SOURCE)
    .pipe(babel({
      comments: false,
    }))
    .pipe(gulp.dest(DIST));
});

gulp.task('babel:clean', () => {
  return del([DIST]);
});

gulp.task('babel:watch', () => {
  gulp.watch([SOURCE], ['babel']);
});
