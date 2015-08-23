var gulp = require('gulp');
var riot = require('gulp-riot');

gulp.task('default',function(){
  gulp.src([
      "./tags/*.tag"
    ])
    .pipe(riot())
    .pipe(gulp.dest("./"));
});
