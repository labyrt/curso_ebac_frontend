import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';

const sass = gulpSass(dartSass);
const { src, dest, watch, parallel } = gulp;

function styles() {
  return src('src/scss/**/*.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

function images() {
  return src('src/images/**/*.{jpg,jpeg,png,gif,svg,webp}')
    .pipe(imagemin())
    .pipe(dest('dist/images'));
}

function scripts() {
  return src('src/js/**/*.js')
    .pipe(terser())
    .pipe(dest('dist/js'));
}

function watcher() {
  watch('src/scss/**/*.scss', styles);
  watch('src/js/**/*.js', scripts);
  watch('src/images/**/*.{jpg,jpeg,png,gif,svg,webp}', images);
}

export { styles, images, scripts, watcher as watch };
export const build = parallel(styles, images, scripts);
export default build;