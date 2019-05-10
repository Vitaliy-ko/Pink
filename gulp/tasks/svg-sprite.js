const { src, dest } = require("gulp");
const svgSprite = require('gulp-svg-sprite');
const plumber = require('gulp-plumber');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');
const configSprite = {
   mode: {
       symbol: {
          sprite: "sprite.svg",
          dest: "",
       },
   }
};

module.exports = function () {
   return function createSvgSprite () {
      return src("src/img/svg/*.svg")
         .pipe(plumber())
         .pipe(svgmin({
            js2svg: {
                  pretty: false,
            }
         }))
         .pipe(replace('&gt;', '>'))
         .pipe(svgSprite(configSprite))
         .on('error', function(error) {
            console.log(error);
          })
         .pipe(dest("build/img"));
   };
};
