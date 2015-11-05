# karma-restify-server
> Makes it easy to globally start a [restify](http://restify.com) server for karma unit tests.

## Installation
```bash
npm install karma-restify-server --save-dev
```

## Usage
```javascript
// karma.conf.js
module.exports = function(config) {
  // ... snip
  frameworks: [ 'restify-server' ],
  restifyServer: {
    port: 8888,
    beforeStart: (server) => {
      server.get('/testurl', (req, res) => {
        res.charSet('utf-8');
        res.send({
          data: 'Mock'
        });
      });
    },
    afterStart: (server) => {
      console.log('Server now listening on port %s', server.url);
    }
  }
});
```

-----

## The configuration object
After the framework is added to the karma configuration, you can control its behaviour with the ```restifyServer``` configuration object. The object holds three seperate items:

#### port (Number):
The port the server will run on. Defaults to 8888 if not provided.

#### beforeStart (Function):
This callback is invoked directly before the server starts to listen.
It takes the created restify instance as parameter.
Use this callback to add your routes to the configuration.

#### afterStart (Function):
This callback is invoked after the server started to listen.
It takes the created restify instance as parameter.

-----

## Special thanks
Special thanks go to [Tadas Subonis](https://github.com/tasubo) for creating [karma-express-http-server](https://github.com/tasubo/karma-express-http-server) where I borrowed some of the code.

## Licence
karma-restify-server is available under MIT-License and can therefore be used in any project free of charge.
