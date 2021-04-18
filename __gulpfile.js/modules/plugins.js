module.exports.plaginsObject = {
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  sourcemaps: require('gulp-sourcemaps'),
  concat: require('gulp-concat'),
  uglify: require('gulp-uglify-es').default,
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  newer: require('gulp-newer'),
  imagemin: require('gulp-imagemin'),
  del: require('del'),
  svgmin: require('gulp-svgmin'),
  cheerio: require('gulp-cheerio'),
  replace: require('gulp-replace'),
  svgstore: require('gulp-svgstore'),
  rename: require("gulp-rename")
}
