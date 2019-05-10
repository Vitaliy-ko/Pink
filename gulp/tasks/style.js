const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sourceMaps = require("gulp-sourcemaps");


module.exports = function () {
   return function style () {
      return src(["src/sass/style.scss", "src/sass/lib/normalize.css"])
         .pipe(plumber())
            .pipe(sourceMaps.init())
               .pipe(sass())
               .pipe(postcss([
                  autoprefixer()
                  ]))
               .pipe(csso())
               .pipe(rename({extname: ".min.css"}))
            .pipe(sourceMaps.write())
            .pipe(dest("./build/css"))
            .pipe($.browserSync.stream())
         .pipe(plumber.stop());
      };
}
