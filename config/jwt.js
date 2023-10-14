const jwt = require('jsonwebtoken');
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });
  }

  module.exports = createToken;