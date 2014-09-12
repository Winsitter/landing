var watch     = require('watch');
var fs        = require('fs');
var express   = require('express');
var app       = express();
var exec      = require('child_process').exec;
var webserver = './build';
var source    = './src';

exec('node ./build.js');
app.use(express.static(webserver));
app.listen(8080);
console.log('Listening on port 8080');

//
// watch.watchTree(source,{ignoreDotFiles: true},function () {
//   , function(error, stdout, stderr) {
//       console.log('file changed, building...');
//       console.log('stdout: ' + stdout);
//       console.log('stderr: ' + stderr);
//       if (error !== null) {
//           console.log('exec error: ' + error);
//       }
//   });
// });
