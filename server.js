// this file is autorun by nodemon via the package.json 'main' property

// make basic web server for local dev
var express   = require('express');
var app       = express();
var webserver = './build'; // output folder

// run metalsmith
var metalsmith = require('./build.js');

// start web server
app.use(express.static(webserver));
app.listen(8080);
console.log('Listening on port 8080');
