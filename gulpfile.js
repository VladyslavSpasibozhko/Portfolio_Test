const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function style () {
	return gulp.src('./less/**/*.less')
		   .pipe(less())
		   .pipe(autoprefixer())
           .pipe(minify({compatibility: 'ie8'}))
		   .pipe(gulp.dest('./css'))
		   .pipe(browserSync.stream())
}

function watch () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./less/**/*.less', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	
}
exports.style = style;
exports.watch = watch;