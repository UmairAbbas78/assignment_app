const jwt = require('jsonwebtoken');
const config = require('../config/config');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username },
    config.jwtSecret,
    { expiresIn: '1h' }
  );
}

module.exports = generateToken;