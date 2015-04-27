var curlyfy = require('curlyfy');
var loaderUtils = require('loader-utils');

module.exports = function curlyfyLoader(source) {
  var options = loaderUtils.parseQuery(this.query);
  return curlyfy(source, options);
};
