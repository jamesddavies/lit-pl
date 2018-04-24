var gulp = require('gulp')
var uglify = require('gulp-uglify-es').default

gulp.task('uglify', function() {  
    return gulp.src('./lib/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./lib'));
})

gulp.task('default', function() {
    gulp.run('uglify')
})