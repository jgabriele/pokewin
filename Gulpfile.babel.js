import browserify from 'browserify';
import watchify   from 'watchify';

import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';

import gulp       from 'gulp';
import sass       from 'gulp-sass';
import cssmin     from 'gulp-cssmin';
import babel      from 'gulp-babel';
import uglify     from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import gutil      from 'gulp-util';
import md5        from 'gulp-md5-plus';

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

gulp.task('sass', ['html'], function() {
  gulp.src(SRC_DIR + 'style.scss')
    .pipe(sass()).on('error', swallowError)
    .pipe(cssmin())
    .pipe(md5(10, `./build/*.html`))
    .pipe(gulp.dest(BUILD_DIR));
});

//=====================//
//========= JS ========//
//=====================//

var options = {
  entries: [`${SRC_DIR}main.js`],
  debug: true,
  transform: ['babelify']
};
var opts = Object.assign({}, watchify.args, options);
var b = watchify(browserify(opts));
b.on('update', buildJS); // on any dep update, runs the bundler
b.on('log', gutil.log);

function buildJS() {
  return b
    .bundle()
    .on('error', swallowError)
    .pipe(source('main.js'))
    .pipe(buffer())

    .pipe(sourcemaps.init({loadMaps: true}))
       .pipe(uglify())
    .pipe(sourcemaps.write('./'))

    .pipe(md5(10, `${BUILD_DIR}*.html`))

    .pipe(gulp.dest(BUILD_DIR));
}

gulp.task('js', ['html'], buildJS);

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
  gulp.watch(SRC_DIR + '**/*.scss', ['build']);
  gulp.watch(SRC_DIR + '**/*.js', ['build']);
  gulp.watch(SRC_DIR + '**/*.html', ['build']);
  gulp.watch(SRC_DIR + '**/*.png', ['images']);
  gulp.watch(SRC_DIR + '**/*.json', ['data']);
});

gulp.task('default', ['build', 'watch']);
