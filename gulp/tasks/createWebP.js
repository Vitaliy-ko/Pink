const { src, dest} = require("gulp");
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');
const extReplace = require("gulp-ext-replace");



module.exports = function () {
   return function createWebP () {
      return src("src/img/**/*.{png,jpg}")
      .pipe(imagemin([
         imageminWebp({
           quality: 90
         })
       ]))
       .pipe(extReplace(".webp"))
      .pipe(dest("build/img"))
   }
}

