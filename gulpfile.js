var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');

gulp.task('babel', function () {
  return gulp.src('js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['babel']);
});

gulp.task('default', ['watch', 'webserver']);