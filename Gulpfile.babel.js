import browserify from 'browserify';
import watchify   from 'watchify';

import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';

import del        from 'del';

import gulp       from 'gulp';
import sass       from 'gulp-sass';
import cssmin     from 'gulp-cssmin';
import babel      from 'gulp-babel';
import uglify     from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import gutil      from 'gulp-util';
import md5        from 'gulp-md5-plus';
import jsonMinify from 'gulp-jsonminify';

var SRC_DIR   = './front/';
var BUILD_DIR = './build/';

function swallowError(err) {
  console.error('Error:', err.message);
  this.emit('end');
}

gulp.task('build', ['js', 'sass', 'static']);

gulp.task('clean:js', () => { del([`${BUILD_DIR}*.js`, `${BUILD_DIR}*.js.map`]); })
gulp.task('clean:css', () => { del([`${BUILD_DIR}*.css`]); })
gulp.task('clean:html', () => { del([`${BUILD_DIR}*.html`]); })
gulp.task('clean:data', () => { del([`${BUILD_DIR}data/*`]); })
gulp.task('clean:images', () => { del([`${BUILD_DIR}images/*`]); })
gulp.task('clean:fonts', () => { del([`${BUILD_DIR}fonts/*`]); })

//=====================//
//======== CSS ========//
//=====================//

gulp.task('sass', ['html', 'clean:css'], () => {
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

    .pipe(md5(10, `${BUILD_DIR}*.html`))

    .pipe(sourcemaps.init({loadMaps: true}))
       // .pipe(uglify())
    .pipe(sourcemaps.write('./'))

    .pipe(gulp.dest(BUILD_DIR));
}

gulp.task('js', ['html', 'clean:js'], buildJS);

//=====================//
//======= STATIC ======//
//=====================//

gulp.task('static', ['html', 'images', 'data', 'fonts']);

gulp.task('html', ['clean:html'], () => {
  gulp.src(SRC_DIR + '*.html')
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('images', ['clean:images'], () => {
  gulp.src(SRC_DIR + 'images/*.*')
    .pipe(gulp.dest(BUILD_DIR + '/images'));
});

gulp.task('data', ['js', 'clean:data'], () => {
  gulp.src(SRC_DIR + 'data/*.json')

    .pipe(jsonMinify())
    .pipe(md5(10, `${BUILD_DIR}*.js`))

    .pipe(gulp.dest(BUILD_DIR + '/data'));
});

gulp.task('fonts', ['clean:fonts'], () => {
  gulp.src(SRC_DIR + 'fonts/*.*')
    .pipe(gulp.dest(BUILD_DIR + '/fonts'));
});


//=====================//
//======= WATCH =======//
//=====================//

gulp.task('watch', () => {
  gulp.watch(SRC_DIR + '**/*.scss', ['build']);
  gulp.watch(SRC_DIR + '**/*.js', ['build']);
  gulp.watch(SRC_DIR + '**/*.html', ['build']);
  gulp.watch(SRC_DIR + '**/*.png', ['images']);
  gulp.watch(SRC_DIR + '**/*.json', ['build']);
});

gulp.task('default', ['build', 'watch']);
