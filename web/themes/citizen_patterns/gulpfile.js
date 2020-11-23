/* globals require */

(function () {
  'use strict';

  // General
  var gulp = require('gulp-help')(require('gulp'));
  var localConfig = {};
  var clean = require('gulp-clean');

  try {
    localConfig = require('./local.gulp-config');
  }
  catch (e) {
    // Do nothing.
  }
  require('emulsify-gulp')(gulp, localConfig);


  // gulp.task('clean', function () {
  //   return gulp.src(['./dist/*','./build/dist/*'], {read: false})
  //     .pipe(clean({force: true}));
  // });

  // gulp.task('scripty', ['clean'], () => {
  //   gulp
  //     .src('./components/_patterns/**/*.js')
  //     .pipe(gulp.dest('./dist'));
  // });

  gulp.task('jsClean', function () {
    return gulp.src('./pattern-lab/public/js/**/*.js', {read: false})
      .pipe(clean({force: true}));
  });

  gulp.task('scriptRefresh', ['jsClean'], () => {
    gulp
      .src('./components/js/**/*.js')
      .pipe(gulp.dest('./pattern-lab/public/js'));
  });

  // gulp.task('watch', function(){
  //   gulp.watch('./components/js/**/*.js', ['scriptRefresh']);
  // });

  // gulp.task('jsFlow', ['scriptRefresh', 'watch']);

})();
