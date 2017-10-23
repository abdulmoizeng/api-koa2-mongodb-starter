# Api-Koa2-MongoDB-Starter

## Quick Start

This starter works with `npm` or [`yarn`](http://yarnpkg.com).

Install:

```sh
yarn # or npm install
```

Run in dev mode, restarting the server on file changes:

```sh
yarn dev

# If you want to generate fresh tables
resetdb=true yarn dev
```

Run unit tests:

```sh
yarn test
```

Run in prod mode, not daemonized, with staging config (suitable for Heroku):

```sh
yarn build
yarn start
```

Start/stop in prod mode, daemonized, with local config:

```sh
yarn build
yarn local:start
yarn local:stop
```

Start/stop in prod mode, daemonized mode, with staging config:

```sh
yarn build
yarn staging:start
yarn staging:stop
```

Build (or update) the API documentation to `api.html` in the root:

```sh
yarn raml
```


## Setup

### Node.js (for local environment)

Download the latest stable version and install it on your machine: https://nodejs.org/en/download/

*Verify it after the installation by running following commands.*
```
$ node --version
$ npm --version
```

### MongoDB (for local environment)

Follow the instructions from this blog post: https://scotch.io/tutorials/an-introduction-to-mongodb

