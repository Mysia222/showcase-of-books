
module.exports = {
    dbUrl : "mongodb://localhost:27017/booksshowcase",
    port : process.env.PORT || 8000,
    secret: 'nodeauthsecret', 
    sendJSONresponse: function(res, status, content) {
      res.status(status);
      res.json(content);
    }
  };