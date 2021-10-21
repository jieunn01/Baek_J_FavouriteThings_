import gulp from "gulp";
import gimage from "gulp-imagemin";
import gsass from "gulp-sass";
import sass from "sass";

const sassify = gsass(sass); // gulp-sass -> sass modules compile

function styles(done) {
  return gulp
    .src("sass/main.scss")
    .pipe(sassify({ outputStyle: "compressed" }))
    .pipe(gulp.dest("css"));
}

function images(done) {
  gulp.src("images/*").pipe(gimage()).pipe(gulp.dest("dist"));
  done();
}

function watch() {
  // gulp.watch("path", func)  // any path modified -> call function 
  gulp.watch("sass/**/*.scss", styles);
  gulp.watch("images/*", images);
}

export {
  watch as default, // gulp , gulp default
  styles as css, // gulp css
  images as img, // gulp img
};
