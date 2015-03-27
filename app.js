var mongoose = require('mongoose')
  , express = require('express')
  , app = express()
  , config = require('config');

require(__dirname + '/models/User');
require(__dirname + '/models/Item');
require(__dirname + '/models/Session');


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

app.use(express.static('public'));
require('./config/routes')(app);

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server listening on port ' + port);

module.exports = app;