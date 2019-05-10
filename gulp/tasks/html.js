const { src, dest } = require("gulp");
const posthtml = require('gulp-posthtml');

module.exports = function () {
   return function html() {
      const include = [ require('posthtml-include')({ root: '' }) ]
      return src('./src/**/*.html')
         .pipe(dest('./build/'))
         .on('end', $.browserSync.reload);
   };
}


