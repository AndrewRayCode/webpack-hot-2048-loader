var fs = require('fs');
var path = require('path');
var loaderUtils = require('loader-utils');

var DEFAULT_WEBSITE = 'https://gabrielecirulli.github.io/2048/';

module.exports = function inject( src ) {
  this.cacheable && this.cacheable();
  
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);

  var website = query.website || DEFAULT_WEBSITE;

  fs.readFile( path.join( __dirname, './client.js' ), 'utf-8', function( err, contents ) {

      if( err ) {
          throw err;
      }
      
      var built = [
          'var website = "' + website + '";',
          src,
          contents,
      ].join('\n');

      callback( null, built );

  });

}
