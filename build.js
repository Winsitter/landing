var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    watch       = require('metalsmith-watch'),
    drafts      = require('metalsmith-drafts'),
    Handlebars  = require('handlebars');

var livereload = false; // need dev/prod logic

var filecopy = function(from, to){
    return function(files, metalsmith, done){
        files[to] = files[from];
        delete files[from];
        done();
    };
};

Metalsmith(__dirname)
  .source('./source')
  .destination('./output')
  .use(drafts()) // add "draft: true" to front-matter in .md files to make draft
  .use(collections({
    // p: {
    //   pattern: 'pages/*.md'
    //  },
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':collection/:title'
  }))
  // .metadata({
  //   partials: {
  //     header: 'header',
  //     footer: 'footer'
  //   }
  // })
  .use(templates({
    engine: 'handlebars',
    directory: 'templates'
    }))
  // .use(filecopy('CNAMESRC', 'CNAME'))
  .use(watch({
      pattern : '**/*',
      livereload: livereload
    }))
  .build(function(err) {if (err) throw err;})
