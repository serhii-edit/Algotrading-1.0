const {src, dest, watch} = require("gulp");
var browserSync = require('browser-sync').create();
const sass = require("gulp-sass");



// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./css/*.css").on("change", browserSync.reload);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/*.scss")
      .pipe(sass())
      .pipe(dest("./css/"))
      .pipe(browserSync.stream());
};

exports.serve = bs;