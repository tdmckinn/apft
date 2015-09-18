/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var clean = require('gulp-clean');
var sass = require('gulp-sass');

gulp.task("scripts", function (callback) {

  return gulp.src(['./scripts/*.json', './scripts/**/*.tsx'])
    .pipe(gulp.dest('./wwwroot/'));

});

gulp.task('webpack', ['scripts', 'styles'], function (cb) {
  // run webpack
  webpack(require('./webpack.config.js'), function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    cb();
  });
});

 
gulp.task('theme', function () {

  return gulp.src(['./semantic/dist/**/*'])
  .pipe(gulp.dest('./wwwroot/assets/sematic/dist'));

});

gulp.task('styles', function () {
  gulp.src('./styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./wwwroot/assets/styles/'));
});

gulp.task('default', function () {
  return gulp.src('./wwwroot/**/*', { read: false })
     .pipe(clean());
});