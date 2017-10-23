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


## Contributing

- Star this [GitHub Repository](https://github.com/narainsagar/api-koa2-mongodb-starter) ⭐
- Fork this [GitHub Repository](https://github.com/narainsagar/api-koa2-mongodb-starter) 👈
- Create [pull requests](https://github.com/narainsagar/api-koa2-mongodb-starter/pulls), [submit bugs](https://github.com/narainsagar/api-koa2-mongodb-starter/issues), suggest new features or documentation updates 🔧

## About Me

> My name is **Narain Sagar**, I’m a FullStack JavaScript Developer, lives in  Karachi, Pakistan and pretty much enjoying my life.

![@narainsagar](https://avatars0.githubusercontent.com/narainsagar?&s=128)

### Follow Me 👍

[Medium](http://blog.narainsagar.com/) | 
[Website](http://narainsagar.com/) | 
[Twitter](https://twitter.com/narainsagar) | 
[LinkedIn](https://www.linkedin.com/pk/narainsagar) | 
[Facebook](https://facebook.com/NarainSagarPage) | 
[Github](https://github.com/narainsagar) | 
[Stack Overflow](https://stackoverflow.com/users/5228251/narainsagar)

## License

MIT - Narain Sagar <narainmenghwar@gmail.com>
