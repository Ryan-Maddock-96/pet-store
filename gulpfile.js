const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Compile SASS
function buildStyles() {
    return gulp.src('./styles/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
};

function buildScript(){
    return gulp.src('./script.js')
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./'))
}

// Start Browser Sync Server
function startBrowserSync() {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    gulp.watch('./styles/*.scss', buildStyles);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', () => { 
        buildScript();
        browserSync.reload();
    });
}

// Create Tasks
gulp.task('default', gulp.parallel(buildScript, buildStyles));
gulp.task('buildStyles', buildStyles);
gulp.task('buildScript', buildScript);
gulp.task('startBrowserSync', startBrowserSync);
