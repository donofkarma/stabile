# Stabile

A static site site generator powered by Jekyll.


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


## Bundling for deployment

```
npm run deploy
```

You'll find a deployable bundle in the `_site` directory.


## To-do
[x] Some better docs


## Release History

For a full release history, see the [Changelog](https://github.com/donofkarma/stabile/blob/master/CHANGELOG.md).


## License

MIT: [https://github.com/donofkarma/stabile/blob/master/LICENSE](https://github.com/donofkarma/stabile/blob/master/LICENSE)
