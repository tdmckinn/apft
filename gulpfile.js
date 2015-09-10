/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var clean = require('gulp-clean');

gulp.task("scripts", function (callback) {

  return gulp.src(['./scripts', './scripts/**/*.tsx'])
    .pipe(clean({ force: true }))
    .pipe(gulp.dest('./wwwroot/'));

});

gulp.task('webpack', ['scripts'], function (cb) {
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
    // place code for your default task here
});