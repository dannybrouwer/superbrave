'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let useref = require('gulp-useref');

let postcss      = require('gulp-postcss');
let sourcemaps   = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');

let themeFolder = 'superbrave';

// Watcher
gulp.task('watch', function () {
  gulp.watch('./site/' + themeFolder + '/scss/*.scss', ['dev'])
});

// Development
gulp.task('dev', function () {
  return gulp.src('./site/' + themeFolder + '/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./site/' + themeFolder + '/css'));
});

// Production
gulp.task('prod-css', function () {
  return gulp.src('./site/' + themeFolder + '/scss/style.scss')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(cssnano())
    .pipe(gulp.dest('./site/' + themeFolder + '/css'));
});

// Auto Prefixer (multi-browser)
// gulp.task('autoprefixer', function () {
//     return gulp.src('./site/' + themeFolder + '/css')
//         .pipe(sourcemaps.init())
//         .pipe(postcss([ autoprefixer() ]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'))
// });