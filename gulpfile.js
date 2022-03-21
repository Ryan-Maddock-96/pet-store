const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

// Compile SASS
function buildStyles() {
    return gulp.src('./styles/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
  };

// Start Browser Sync Server
function startBrowserSync() {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    gulp.watch('./styles/*.scss', buildStyles);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
}

// Create Tasks
gulp.task('buildStyles', buildStyles);
gulp.task('startBrowserSync', startBrowserSync);
