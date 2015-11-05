'use strict';
const restify = require('restify');

var createRestifyServer = function(args, config, logger) {

  const log = logger.create('restify.server');

  log.info('Starting restify server...');

  let port = typeof config.restifyServer.port !== 'undefined' ? config.restifyServer.port : 8888;
  let server = restify.createServer();
  server.use(restify.CORS());

  // Add possibility to set custom routes for users before server starts
  if(config.restifyServer.beforeStart) {
    config.restifyServer.beforeStart(server);
  }

  server.listen(port, () => {

    // Add possibility to do something after server has started
    if(config.restifyServer.afterStart) {
      config.restifyServer.afterStart(server);
    }

    log.info(`Restify server started on port ${port}`);
  });
};

module.exports = {
  'framework:restify-server': ['factory', createRestifyServer]
};
