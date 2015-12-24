
const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const sass = require('gulp-sass');
const del = require('del');
const cache = require('gulp-cache');

// gulp.task('clean', cb => {
//   cache.clearAll();
//   cb(del.sync('dist'));
// });


gulp.task('csv', cb => {
  return gulp.src(['./data/*.csv'])
    .pipe(gulp.dest('./wwwroot/data/'));
});

gulp.task('webpack', cb => {
  // run webpack
  webpack(require('./webpack.config.js'), (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    cb();
  });
});

gulp.task('views', () => {
  return gulp.src(['./views/**/*.html'])
    .pipe(gulp.dest('./wwwroot/views/'));
});

gulp.task('theme', () => {
  return gulp.src(['./semantic/dist/**/*'])
    .pipe(gulp.dest('./wwwroot/assets/sematic/dist'));
});

gulp.task('styles', () => {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./wwwroot/assets/styles/'));
});

// Build
gulp.task('build', ['views', 'styles', 'theme', 'csv', 'webpack']);

// Default task
gulp.task('default', ['build']);
