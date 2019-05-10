const { src, dest} = require("gulp");
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');



module.exports = function () {
   return function recompressImg () {
      return src("src/img/**/*.{png,jpg}")
      .pipe(imagemin([
         imageminJpegRecompress({
            progressive: true,
            max: 90,
            min: 80,
            quality:'high'
         }),
         imageminPngquant({quality: [0.8, 0.9]}),
      ]))
      .pipe(dest("build/img"))
   }
}
