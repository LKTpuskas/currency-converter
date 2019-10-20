[![Coverage Status](https://coveralls.io/repos/github/Jukejc/react-redux-starter/badge.svg?branch=master)](https://coveralls.io/github/Jukejc/react-redux-starter?branch=master)

# react-redux-starter
My preferred setup for small to medium sized React / Redux applications. Comes packaged with Travis CI, a Karma / Enzyme / Mocha testing suite, Webpack bundling, and a boilerplate Express server.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
    1. [List of Packages](#list-of-packages)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Local Development](#local-development)
    1. [Testing](#testing)
1. [Travis CI Setup](#travis-ci-setup)
1. [Coveralls Setup](#coveralls-setup)
1. [Contributing](#contributing)

## Features
- Simple to understand file structure optimized for small to medium sized React / Redux applications
- es2015 support
- async / await support
- Karma / Enzyme / Mocha test suite
- Travis CI integration
- Boilerplate Express server


## Requirements

### List of Packages

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| cookie-parser                   | Parse Cookie header and populate req.cookies object                   |
| dotenv                          | Loads environment variables from .env file.                           |
| express                         | Node.js web framework.                                                |
| body-parser                     | Express 4 middleware.                                                 |
| express-session                 | Express 4 middleware.                                                 |
| morgan                          | Express 4 middleware.                                                 |
| serve-favicon                   | Express 4 middleware offering favicon serving and caching.            |
| passport                        | Simple and elegant authentication library for node.js                 |
| lodash                          | Handy JavaScript utlities library.                                    |
| mocha                           | Test framework.                                                       |
| chai                            | BDD/TDD assertion library.                                            |
| react                           | Javascript library for building user interfaces                       |
| react-redux                     | React bindings for Redux                                              |
| react-router                    | Declarative routing for React                                         |
| redux                           | State management container for React apps                             |
| babel-core                      | Babel compiler core                                                   |
| babel-loader                    | Allows transpiling of JS files using Babel and Webpack                |
| babel-plugin-istanbul           | A Babel plugin that instruments your code with Istanbul coverage.     |
| babel-plugin-transform-async-to-generator | Turn async functions into ES2015 generators                 |
| babel-polyfill                  | Provides polyfills necessary for a full ES2015+ environment.          |
| babel-preset-es2015             | Babel preset for all es2015 plugins.                                  |
| babel-preset-react              | Babel preset for all React plugins.                                   |
| babel-preset-stage-1            | [Babel preset for stage 1 plugins.](https://www.npmjs.com/package/babel-preset-stage-1) |
| cross-env                       | Run scripts that set and use environment variables across platforms.  |
| enzyme                          | JavaScript Testing utility for React                                  |
| karma                           | Javascript test runner                                                |
| karma-babel-preprocessor        | Preprocessor to compile ES6 on the fly with babel                     |
| karma-coverage                  | Generate code coverage with karma and Istanbul                        |
| karma-mocha                     | karma adapter for mocha testing framework                             |
| karma-nyan-reporter             | Nyan Cat style testing reporter                                       |
| karma-phantomjs-launcher | karma launcher for PhantomJS |
| karma-sourcemap-loader | Preprocessor that locates and loads existing source maps. |
| karma-webpack | karma plugin for running webpack |
| mocha | Javascript testing framework |
| react-addons-test-utils | React testing utilities |
| react-dom | Rendering react components into DOM |
| react-test-renderer | enzyme dependency for React component testing |
| webpack | module bundler |
| coveralls | code coverage reporter viewable at [coveralls.io](https://coveralls.io/)

## Development

### Installing Dependencies

From within the root directory:

```sh
# install npm dependencies
npm install
```

### Local development

```sh
# generates bundles.js with webpack
npm run build

# starts boilerplate express server
npm run s
```

### Testing

```sh
# single run karma test suite
npm test

# OR

# auto run tests on file changes
karma start
```
> Then view code coverage by opening ~/coverage/report/index.html

## Travis CI Setup

1. Sign into [Travis CI](https://travis-ci.org/auth) with Github account.
1. Navigate to [profile page](https://travis-ci.org/profile) and enable repository to be built.
1. Push commits to master branch of repo and navigate back to [Travis CI](https://travis-ci.org/). Builds will auto run on pushes to master branch, travis.yml file already setup.

## Coveralls Setup

1. Login to [coveralls](https://coveralls.io) with Github.
1. Enable tracking for your repo on [coveralls](https://coveralls.io/repos/new).
1. That's it, Travis CI will run npm script on successful builds after that.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.