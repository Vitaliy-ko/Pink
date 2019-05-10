const { src, dest } = require("gulp");

module.exports = function () {
   return function html() {
      return src('./src/**/*.html')
         .pipe(dest('./build/'))
         .on('end', $.browserSync.reload);
   };
}


