'use strict';

class PingController {

  show(request, response) {

    response({ success: true });
  }


}

module.exports = new PingController();
