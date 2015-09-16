/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var clean = require('gulp-clean');

gulp.task("scripts", function (callback) {

  return gulp.src(['./scripts', './scripts/*.json', './scripts/**/*.tsx'])
    .pipe(gulp.dest('./wwwroot/'));

});

gulp.task('webpack', ['default', 'scripts'], function (cb) {
  // run webpack
  webpack(require('./webpack.config.js'), function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    cb();
  });
});

gulp.task('default', function () {
  return gulp.src('./wwwroot', { read: false })
     .pipe(clean());
});