var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function(){
    return gulp.src('demo/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('demo/'))
});

gulp.task('watch',function(){
    gulp.watch('demo/**/*.scss', ['scss']);
})

gulp.task('default', function() {
    gulp.start('scss', 'watch');
});