var gulp = require('gulp')
var uglify = require('gulp-uglify-es').default
var gzip = require('gulp-gzip')

gulp.task('uglify', function(cb) {  
    return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('/'));
})

gulp.task('default', function() {
    gulp.run('uglify')
})