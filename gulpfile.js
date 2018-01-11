

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['css'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./src/**/*.css", ['css']).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css', function () {
	var procesos = [
		// precss
	];
	return gulp.src('./src/**/*.css')
		.pipe(postcss(procesos))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['serve']);
