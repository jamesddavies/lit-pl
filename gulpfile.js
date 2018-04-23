var gulp = require('gulp')
var minify = require('gulp-minify')
var gzip = require('gulp-gzip')

gulp.task('compress', function() {
    gulp.src('src/**/*.js')
        .pipe(minify({
            ext:{
                src:'-min.js',
                min:'.js'
            }
        }))
        .pipe(gulp.dest(''))
})

gulp.task('default', function() {
    gulp.run('compress')
})