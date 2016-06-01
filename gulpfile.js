/////////////////////////////////////////////////////
//  Required
/////////////////////////////////////////////////////
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concate = require('gulp-concat');
/////////////////////////////////////////////////////
//  Tasks
/////////////////////////////////////////////////////
gulp.task('Test', function () {
    console.log("It works")
})
gulp.task('minifier',function(){
	gulp.src(['companywebsite/companywebsite/app/**/*.js',
	 '!companywebsite/companywebsiteapp/app/**/**.min.js'])
		.pipe(concate('concat.js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('companywebsite/companywebsite/app'));

})
/////////////////////////////////////////////////////
//  Watch
/////////////////////////////////////////////////////
gulp.task('watch',function(){
  gulp.watch('companywebsite/companywebsite/app/**/*.js',['minifier']);
});
////////////////////////////////////////////////////
//Default Task
/////////////////////////////////////////////////////
gulp.task('default',['minifier']);

