

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var cssmin  = require('gulp-cssmin');
var babel   = require('gulp-babel');

var SRC_DIR   = './front/';
var BUILD_DIR = './build/';

function swallowError(err) {
  console.error('Error:', err.message);
  this.emit('end');
}

gulp.task('build', ['js', 'sass', 'static']);

//=====================//
//======== CSS ========//
//=====================//

gulp.task('sass', function() {
  gulp.src(SRC_DIR + 'style.scss')
    .pipe(sass()).on('error', swallowError)
    .pipe(cssmin())
    .pipe(gulp.dest(BUILD_DIR));
});

//=====================//
//========= JS --======//
//=====================//

gulp.task('js', function() {
  gulp.src(SRC_DIR + '*.js')
    .pipe(babel({
      presets: ['es2015']
    })).on('error', swallowError)
    .pipe(gulp.dest(BUILD_DIR));
});

//=====================//
//======= STATIC ======//
//=====================//

gulp.task('static', ['html', 'images', 'data', 'fonts']);

gulp.task('html', function() {
  gulp.src(SRC_DIR + '*.html')
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('images', function() {
  gulp.src(SRC_DIR + 'images/*.*')
    .pipe(gulp.dest(BUILD_DIR + '/images'));
});

gulp.task('data', function() {
  gulp.src(SRC_DIR + 'data/*.json')
    .pipe(gulp.dest(BUILD_DIR + '/data'));
});

gulp.task('fonts', function() {
  gulp.src(SRC_DIR + 'fonts/*.*')
    .pipe(gulp.dest(BUILD_DIR + '/fonts'));
});


//=====================//
//======= WATCH =======//
//=====================//

gulp.task('watch', function() {
  gulp.watch(SRC_DIR + '**/*.scss', ['sass']);
  gulp.watch(SRC_DIR + '**/*.js', ['js']);
  gulp.watch(SRC_DIR + '**/*.html', ['static']);
  gulp.watch(SRC_DIR + '**/*.png', ['static']);
  gulp.watch(SRC_DIR + '**/*.json', ['static']);
});

gulp.task('default', ['build', 'watch']);
