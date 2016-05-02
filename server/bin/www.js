/*
 * Dependencies
 */

var mongoose = require('mongoose')
  , express = require('express')
  , config = require('config');

// require models
require('./models/user');
require('./models/item');
require('./models/session');


/*
 * Connect mongoose
 */
var connectMongoose = function () {
  console.log('Connecting to mongo at ' + config.db);
  mongoose.connect(config.db, { 
    server: { 
      socketOptions: { 
        keepAlive: 1 
      } 
    }
  });
};
connectMongoose();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connectMongoose);

/*
 * Start Express
 */
var app = express()

app.use(express.static('public'));

/*
 * require in routes
 */ 
require('./config/routes')(app);


var port = process.env.PORT || 3000
app.listen(port);
console.log('Server listening on port ' + port);

/*
 * Export for testing
 */
module.exports = app;