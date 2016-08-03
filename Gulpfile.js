var gulp    = require('gulp');
var sass    = require('gulp-sass');
var cssmin  = require('gulp-cssmin');

var SRC_DIR   = './front/';
var BUILD_DIR = './build/';

function swallowError(err) {
  console.error('Error:', err.message);
  this.emit('end');
}

//=====================//
//======== CSS ========//
//=====================//

gulp.task('sass', function() {
  gulp.src(SRC_DIR + 'style.scss')
    .pipe(sass()).on('error', swallowError)
    .pipe(cssmin())
    .pipe(gulp.dest(BUILD_FOLDER));
});

//=====================//
//======== DATA =======//
//=====================//