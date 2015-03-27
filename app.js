/*
 * Dependencies
 */

var mongoose = require('mongoose')
  , express = require('express')
  , config = require('config');

// require models
require(__dirname + '/models/User');
require(__dirname + '/models/Item');
require(__dirname + '/models/Session');


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

app.listen(process.env.PORT || 3000);
console.log('Server listening on port ' + process.env.PORT || 3000);

/*
 * Export for testing
 */
module.exports = app;