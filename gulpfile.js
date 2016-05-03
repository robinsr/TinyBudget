'use strict';

var gulp = require('gulp');
var bsfy = require('browserify-incremental');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');

gulp.task('compile-js-dev', function () {
  return bsfy('./client/src/main.js', {debug: true})
    .transform(babelify, {
      presets: [
        'es2015',
        'react'
      ],
      "plugins": [
        'transform-class-properties'
      ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./server/public/build'));
});

gulp.task('compile-less', function () {
  return gulp.src('./client/less/main.less')
    .pipe(less({
      paths: ['./node_modules']
    }))
    .pipe(gulp.dest('./server/public/build'));
})

gulp.task('watch-js', function () {
  return gulp.watch('./client/src/**/*.{js,jsx}', ['compile-js-dev'])
});

gulp.task('watch-less', function () {
  return gulp.watch('./client/less/**/*.scss', ['compile-less']);
});

gulp.task('watch', ['watch-js', 'watch-less']);

gulp.task('default', ['compile-js-dev', 'compile-less']);