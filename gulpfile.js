//  Add to gulp need libery
var gulp = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		cleanCSS       = require('gulp-clean-css'),
		autoprefixer   = require('gulp-autoprefixer'),
		bourbon        = require('node-bourbon'),
		ftp            = require('vinyl-ftp');

// Gulp auto-reload function
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "opencart.comn",
		notify: false
	});
});
// browserSync = require('browser-sync').create(),
// gulp.task('browser-sync', function() {
//   browserSync.init()
// });

// Compileted stylesheet.css
gulp.task('sass', function() {
	return gulp.src('catalog/view/theme/apple/stylesheet/stylesheet.scss')
        .pipe(sass({
        	includePaths: bourbon.includePaths
        	}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(cleanCSS())
		.pipe(gulp.dest('catalog/view/theme/apple/stylesheet/'))
		.pipe(browserSync.reload({stream: true}))
		browserSync.reload();
});

// Watch for files gulp reload
gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('catalog/view/theme/apple/stylesheet/**.scss', ['sass']);
	gulp.watch('catalog/view/theme/apple/template/**/*.twig', browserSync.reload);
	gulp.watch('catalog/view/theme/apple/js/**/*.js', browserSync.reload);
	gulp.watch('catalog/view/theme/apple/libs/**/*', browserSync.reload);
});

// Change on host files
// gulp.task('deploy', function() {
// 	var conn = ftp.create({
// 		host:      'hostname.com',
// 		user:      'username',
// 		password:  'userpassword',
// 		parallel:  10,
// 		log: gutil.log
// 	});
// 	var globs = [
// 	'catalog/view/theme/apple/**'
// 	];
// 	return gulp.src(globs, {buffer: false})
// 	.pipe(conn.dest('/path/to/folder/on/server'));
// });

gulp.task('default', ['browser-sync', 'watch']);
