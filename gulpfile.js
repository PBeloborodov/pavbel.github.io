'use strict';
const {series, src, dest, watch, parallel} = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  minifyCss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer');

function bs() { 
    browserSync.init({ 
      server: { 
        baseDir: './' 
      },
      notify: false 
    });
  }

function sassCompil () {
  return src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./src/css'))
    .pipe(browserSync.reload({stream: true}));
}

function htmlServe() {
	return src('./*.html')
	.pipe(browserSync.reload({ stream: true }));
}

function watchServe() {
  watch("./*.html", htmlServe);
  watch('./src/sass/**/*.sass', sassCompil);
  watch('./src/css/style.css', minCss);
}

function minCss(){
  return src('./src/css/style.css')
  .pipe(minifyCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('./dist/css'))
  .pipe(browserSync.reload({stream: true}));
}
function addFonts(){
  return src('./src/fonts/**/*').pipe(dest('./dist/fonts'));
}
exports.start = parallel(bs, watchServe, addFonts);
 
