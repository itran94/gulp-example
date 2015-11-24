var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var beautify = require('gulp-beautify');

gulp.task('beautify', function() {
  gulp.src('/dist/*.js')
    .pipe(beautify({indentSize: 2}))
    .pipe(gulp.dest('public'));
});

gulp.task('uglify', function() {
  // gulp.src('test/conf.js')
  // .pipe(jasmine());
  gulp.src('src/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(rename('all.min.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});
