const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point tofiles to use
	gulp.dest - Points to folder to output
	gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(callback){
	console.log('Gupl is running...');
	callback();
});

// Copy All HTML files
gulp.task('copyHtml', function(callback){
  	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
	callback();
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/img/*')
		// .pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);

// Scripts
gulp.task('scripts', function(callback) {
	gulp.src('src/js/*.js')
		// .pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	callback();
});

// Compile Sass
gulp.task('sass', function(callback) {
	gulp.src('src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
	callback();
});

gulp.task('icon', function(callback) {
	gulp.src('src/icon/*')
		.pipe(gulp.dest('dist/icon'));
	callback();
});


gulp.task('default', gulp.parallel('message', 'copyHtml','sass','imageMin','scripts', 'icon'), function(callback) {callback()});

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', gulp.series('scripts'), callback => {callback();})
	gulp.watch('src/img/*', gulp.series('imageMin'), callback => {callback();})
	gulp.watch('src/scss/*.scss', gulp.series('sass'), callback => {callback();})
	gulp.watch('src/*.html', gulp.series('copyHtml'), callback => {callback();})	
	gulp.watch('src/icon/*', gulp.series('icon'), callback => {callback();})
})