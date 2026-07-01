const gulp = require('gulp');

// Task to copy all images from src root to src/images folder
gulp.task('images', function() {
  return gulp.src('src/*.{jpg,jpeg,png,gif,svg,webp}')
    .pipe(gulp.dest('src/images'));
});

// Default task
gulp.task('default', gulp.series('images'));
