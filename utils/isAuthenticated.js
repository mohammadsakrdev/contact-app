const config = require('../config');
module.exports = (req, res, next) => {
  if (req.header('Authorization') !== config.secretToken) {
    return res
      .status(401)
      .send({ success: false, message: 'Un Authorized Access' });
  }
  next();
};
