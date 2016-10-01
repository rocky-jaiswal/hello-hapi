'use strict';

const PingController = require('../controllers/ping_controller');

const Routes = {
  config: [
    { method: 'GET',  path: '/ping', config: { handler: PingController.show,  auth: false } }
  ]
};

module.exports = Routes;
