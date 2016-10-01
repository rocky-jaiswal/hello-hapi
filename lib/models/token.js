'use strict';

const JWT    = require('jsonwebtoken');

class Token {

  static validate(decoded, request, callback) {

    if (!decoded.id) {
      callback(null, false);
    }
    else {
      callback(null, true);
    }
  }

  static generate(userId) {

    return JWT.sign({ id: userId }, 'something_secret', { expiresIn: '1h' });

  }

}

module.exports = Token;
