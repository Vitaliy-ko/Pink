const del = require('del');

module.exports = function () {
   return function clean() {
      return del('build');
   }
};
