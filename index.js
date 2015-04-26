var curlyfy = require('curlyfy');
var loaderUtils = require('loader-utils');

module.exports = function curlyfyLoader(source) {
  var query = loaderUtils.parseQuery(this.query);
  var options = {
    insertSemicolons: query.insertSemicolons == 'true'
  };
  return curlyfy(source, options);
};