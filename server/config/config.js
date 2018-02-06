const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    dbUrl : "mongodb://localhost:27017/booksshowcase",
    port : process.env.PORT || 8000,
    secret: crypto // Cryto-created secret
  };