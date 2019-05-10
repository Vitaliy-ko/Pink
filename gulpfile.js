'use strict'

global.$ = {
   browserSync: require("browser-sync").create(),
   watcher: require('./gulp/watcher.js')(),
   html: require('./gulp/tasks/html.js')(),
   style: require('./gulp/tasks/style.js')(),
   clean: require('./gulp/tasks/clean.js')(),
   recompressImg: require('./gulp/tasks/recompressImg.js')(),
   createWebP: require('./gulp/tasks/createWebP.js')(),
   fonts: require('./gulp/tasks/fonts.js')(),
   createSvgSprite: require('./gulp/tasks/svg-sprite.js')(),
};

const {series, parallel} = require("gulp");


function serve (cb) {
   $.browserSync.init({
       server: {
           baseDir: "./build/",
       }
   });
   cb();
};


exports.default = series(
   $.clean,
   parallel($.style, $.html, $.recompressImg, $.createWebP, $.fonts, $.createSvgSprite),
   parallel($.watcher, serve),
);
