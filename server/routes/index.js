const bookRoutes = require('./books');
module.exports = function(app, db) {
  bookRoutes(app, db);
  // other roters
};