landing
=======

This Static Site Generator uses nodes Metalsmith module
http://www.metalsmith.io/

## To Setup
* clone this repo and `npm install`
* `npm install -g nodemon` if it's a dev box for editing


## To Build
`node build.js` will build files from `./templates`, `./src`, and `./assets` into `./build` using the `build.js`
ordering of commands. The `./build` is then a full static website for use. It's not stored in git.

## For Development
Run nodemon, which will pickup `nodemon.json` telling it what to watch. packages.json `main` value tells it to
run `node server.js` which will also run the build script. This has the effect of every file save causing a
rebuild and restart node (`express`) web server. Sorry, you'll still have to F5 in browser.

=================
=================

Redesign Ideas
======================

Homepage redesign to static single-page (ok maybe a few more) site
qa: http://landing-qa.azurewebsites.net/


originally based on bootstrap 3 carousel example
https://github.com/twbs/bootstrap/tree/master/examples/carousel


Some Resources on good landing pages for a startup
==========================================

http://pitchpigeon.com/blog/the-startup-marketing-toolkit.html

http://blog.hubspot.com/7-landing-page-design-tips


good examples of others
===========================
http://pitchpigeon.com/blog/20-awesome-startup-landing-pages.html

https://slack.com
