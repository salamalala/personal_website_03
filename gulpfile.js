'use strict';

var gulp          = require('gulp');
var shell         = require('gulp-shell');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var cssnano       = require('cssnano');
var babel         = require('gulp-babel');
var concat        = require('gulp-concat')
var minify        = require('gulp-minify');
// to import node module normalize in sass file
var postcssEasyImport = require('postcss-easy-import');

var paths = {
  scss: '_sass/*/*.scss',
  html:  '_layouts/*.html',
  js:   'assets/src/*.js'
};

gulp.task('build', shell.task(['bundle exec jekyll serve']));

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  var postCSSplugins = [
      postcssEasyImport(),
      autoprefixer(),
      cssnano()
    ];
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postCSSplugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/dist/"))
    .pipe(browserSync.stream());
});

// ES6 compatibility with Babel & auto-inject into browsers
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/dist/"))
    .pipe(browserSync.stream());
});

// Static server + watching scss/php files
gulp.task('serve', ['sass', 'scripts'], function() {
  browserSync.init({
    server: {baseDir: '_site/'}
  });

  gulp.watch(paths.scss,['sass']).on('change', browserSync.reload);
  gulp.watch(paths.js,['scripts']).on('change', browserSync.reload);
  gulp.watch(paths.html).on('change', browserSync.reload);
});





gulp.task('default', ['build','sass', 'scripts', 'serve']);
