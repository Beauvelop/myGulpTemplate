var gulp = require('gulp');

var sass = require('gulp-sass');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['sass', 'js'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    //other watchers
});

gulp.task('default', ['watch'])
