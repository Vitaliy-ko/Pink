const { src, dest } = require("gulp");

module.exports = function () { 
   return function fonts() {
      return src("src/fonts/opensans/*.{woff,woff2,css}")
         .pipe(dest("build/fonts"));
   };
};
