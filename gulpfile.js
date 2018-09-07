'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const mergeStream = require('merge-stream');


 // =================================
 // ======= start copy config========
 // =================================
gulp.task('copy', function () {
  return mergeStream(
    gulp.src('./src/assets/imgs/**/*').pipe(gulp.dest('./public/imgs/')),
    gulp.src('./src/assets/manifest.json').pipe(gulp.dest('./public/')),
    gulp.src('./src/assets/robots.txt').pipe(gulp.dest('./public/'))
  );
});
 // =================================
 // ======= end copy config========
 // =================================
 // =================================
 // ======= start html config========
 // =================================

gulp.task('html', () => {
	return gulp.src('./src/html/*.pug')
	.pipe(plugins.pug({pretty:true}))
	.on('error', (err) => {
		console.log(`pug err ${err}`)
	})
	.pipe(gulp.dest('./public/'));
});
 // =================================
 // ======= end html config========
 // =================================

// =================================
// ======= start css config========
// =================================

gulp.task('css', () => {
  return gulp.src('./src/css/sass/*.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on('error', plugins.sass.logError)
    .pipe(plugins.postcss([ autoprefixer({browsers: 'last 2 versions'}) ]))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css/'));
});

// =================================
// ======= end css config========
// =================================

// =================================
// ===== start watch config ========
// =================================

gulp.task('watch', () => {
  gulp.watch('./src/css/**/*.s?ss', ['css']);
  gulp.watch('./src/html/**/*.pug', ['html']);
  gulp.watch('./src/assets/**', ['copy']);
});

// =================================
// ===== end watch config ========
// =================================

// =================================
// ======= default config run ========
// =================================
gulp.task('default',['copy', 'html', 'css','watch'])