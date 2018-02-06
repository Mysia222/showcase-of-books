const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      config = require('./config/config'),
      path = require('path'),
      router = express.Router(),
      cors = require('cors');

//mongoDB
const mongoose = require('mongoose');
            
//routers
const books = require('./routes/books')(router);
const auth = require('./routes/auth')(router);

//connection to DB
mongoose.connect(config.dbUrl,  { useMongoClient: true });
mongoose.connection.once('connected', function() {
    console.log("Database connected to " + config.dbUrl);
});

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Use routes in application
app.use('/books', books);

// Use routes in application
app.use('/auth', auth);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(config.port, function() {
    console.log(`listening on port ${config.port}...`)
})