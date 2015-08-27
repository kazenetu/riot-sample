var gulp = require('gulp');
var riot = require('gulp-riot');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var webserver = require('gulp-webserver');

//tagファイルのビルド
gulp.task('default',function(){
  gulp.src([
      "./tags/*.tag"
    ])
    .pipe(riot())
    .pipe(gulp.dest("./"));
});

//テスト
var webStream = null;
gulp.task('test',['testMain'], function() {
  webStream.emit('kill');
});

gulp.task('startServer', function() {
  webStream = gulp.src('./').pipe(webserver());
});

gulp.task('testMain',['startServer'], function() {
  var stream = mochaPhantomJS();
  stream.write({path: 'http://localhost:8000/test/test.html'});
  stream.end();

  return stream;
});
