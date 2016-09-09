var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('babel', function () {
  return gulp.src('js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});


gulp.task('inject', ['babel'], function(){
    var target = gulp.src('index.html');
    var sources = gulp.src('dist/**/*.js', { read: false });

    return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['inject']);
});

gulp.task('default', ['inject', 'watch', 'webserver']);