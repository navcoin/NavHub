var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var fs = require('file-system');

gulp.task('sass', function () {
  buildSass()
});

gulp.task('sass:watch', function () {
  buildSass()
  gulp.watch('./themes/navhub-v2/static/css/sass/**/*.scss', ['sass']);
});

function buildSass() {
  return new Promise((fufill) => {
    fufill(gulp.src('themes/navhub-v2/static/css/sass/nav.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/navhub-v2/static/css')))
    console.log('CSS Compiled')
  })
}

gulp.task('react:watch', function(){
  buildReact()
  gulp.watch('./react/components/**/*.js', ['react'])
});

gulp.task('react', function () {
  buildReact()
});

const components = ['latest-news.js', 'news.js']

function buildReact() {

  // gulp.src('./react/components/*.js')
  // .pipe(() => {

  // })

  fs.recurse('./react/components', ['*.js'], function(filepath, relative, filename) {
    var bundler = browserify({
      cache: {},
      packageCache: {},
      fullPaths: false,
      debug: true,
      sourceType: 'module'
    })
    bundler.add(('./react/components/' + filename))
    bundler.transform(babelify, {
      presets: ['@babel/preset-react'],
    })
    bundle(bundler, filename);
  });
}

function bundle(bundler, component) {
  bundler
      .bundle() 
      .pipe(source('./react-components/src/' + component)) 
      .pipe(buffer())   
      .pipe(rename(component))        
      .pipe(gulp.dest('./themes/navhub-v2/static/js/react/'));   
}
