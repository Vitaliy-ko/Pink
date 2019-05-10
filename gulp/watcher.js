const {series, watch } = require("gulp");

module.exports = function () {
   return function watcher (cb) {
      watch("src/sass/**/*.{scss,sass}", { events: 'all' }, series([$.style]));
      watch("src/**/*.html", { events: 'all' }, series($.html));
      cb();
   };
}