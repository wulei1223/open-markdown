var gulp = require('gulp');
var react = require('gulp-react');
var del = require('del');

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('jsx', ['clean'], function() {
  return gulp.src('src/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('build'));
});



gulp.task('watch', function() {
  gulp.watch('src/*.jsx', ['jsx']);
});

gulp.task('default', ['watch', 'jsx']);
