var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  buildSass()
});

gulp.task('sass:watch', function () {
  buildSass()
  gulp.watch('./themes/navhub-v2/static/css/*.scss', ['sass']);
});

function buildSass() {
  return new Promise((fufill) => {
    fufill(gulp.src('themes/navhub-v2/static/css/nav.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/navhub-v2/static/css')))
    fufill(gulp.src('themes/navhub-v2/static/css/guides.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/navhub-v2/static/css')))
    console.log('CSS Compiled')
  })
}
