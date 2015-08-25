var gulp = require('gulp');
var riot = require('gulp-riot');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('default',function(){
  gulp.src([
      "./tags/*.tag"
    ])
    .pipe(riot())
    .pipe(gulp.dest("./"));
});

gulp.task('test', function() {
	return gulp
	    .src('test/test.html')
	    .pipe(mochaPhantomJS());
});
