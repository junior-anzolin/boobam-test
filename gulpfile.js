import gulp from "gulp";
import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import gulpEsbuild from "gulp-esbuild";

const sass = gulpSass(nodeSass);

gulp.task("pack-js", () => {
  return gulp
    .src(["src/scripts/**/*.ts"])
    .pipe(
      gulpEsbuild({
        outdir: "dist",
        bundle: true,
        loader: {
          ".ts": "ts",
        },
      })
    )
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("pack-css", () => {
  return gulp
    .src(["src/styles/*.scss"])
    .pipe(sass())
    .pipe(concat("stylesheet.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("dist"));
});

gulp.task("copy-html", () => {
  return gulp.src("src/index.html").pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.parallel(["pack-js", "pack-css", "copy-html"]));
