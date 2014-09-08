var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    watch       = require('metalsmith-watch'),
    drafts      = require('metalsmith-drafts'),
    assets      = require('metalsmith-assets'),
    redirect    = require('metalsmith-redirect'),
    sitemap     = require('./metalsmith-sitemap'), // https://github.com/ExtraHop/metalsmith-sitemap
    Handlebars  = require('handlebars');

// var filecopy = function(from, to){
//     return function(files, metalsmith, done){
//         files[to] = files[from];
//         delete files[from];
//         done();
//     };
// };

Metalsmith(__dirname)
  // .source('./source')
  // .destination('./output')
  .use(drafts()) // add "draft: true" to front-matter in .md files to make draft
  .use(collections({
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':date/:stub'
  }))
  .metadata({
    partials: {
      header: 'header',
      footer: 'footer',
      navbar: 'navbar'
    }
  })
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './' // relative to the build directory
  }))
  .use(sitemap({
    ignoreFiles: [/feed.xml/], // Matched files will be ignored
    output: 'sitemap.xml', // The location where the final sitemap should be placed
    urlProperty: 'sitemapUrl', // Key for URL property
    modifiedProperty: 'modified', // Key for last modified property
    changefreq: 'changefreq',  // always hourly daily weekly monthly yearly never
    priority: 'priority', // from 0.0 to 1.0
    defaults: { // You can provide default values for any property in here
        priority: 0.5,
        changefreq: 'weekly'
    }
  }))
  .use(redirect({  // create any redirects, source: destination
    '/windows-server-monitoring': '/',
    '/about-us': '/#about',
    '/category/heartbeat': '/blog',
    '/why': '/',
    '/how-we-built-winsitter': '/',  // like to replace
    '/get-started': '/',
    '/faq': '/'                      // need to replace
  }))
  .use(templates({engine:'handlebars'}))
  // .use(watch())
  .build(function(err) {if (err) throw err;})
