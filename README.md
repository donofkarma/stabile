# Stabile

A static site powered by [Jekyll](https://jekyllrb.com/).


## Getting started

You will need [Node.js](http://nodejs.org/download/) (min v6.10.x), [Ruby](https://www.ruby-lang.org/en/), [Bundler](https://bundler.io/) and [Yarn](https://yarnpkg.com/lang/en/).

Once these have been installed run:

```
bundle install && npm run start
```

The local site will now be available at [http://localhost:4000/](http://localhost:4000/).

## Writing code

```
npm run start
```

 The process will start the server and watch for changes, recompiling as necessary. If you add new assets such as fonts or images you will need to manually copy them to the `_site` output by running:

```
npm run copy
```

The site uses standard Jekyll conventions for templates (markdown) and wrappers (HTML).

CSS is created using [SASS](http://sass-lang.com/) but compiled via the `node-sass` module as this is quicker than using the usual Ruby implementation.

The Javascript can be found in `./views/_includes/_global/document_foot.html`. There is so little on this site that it's more efficient to add it this way than to wrap it in a transpile/bundle process.


### HTML Compression

The HTML is compressed by default using the `compress.html` layout. If you would like to disable this then remove the YML front-matter from the `default.html` layout.


## Bundling for deployment

```
npm run deploy
```

You'll find a deployable bundle in the `_site` directory.
