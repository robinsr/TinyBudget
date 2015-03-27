var mongoose = require('mongoose')
  , express = require('express')
  , app = express();

require(__dirname + '/models/User');

var connectMongoose = function () {
    mongoose.connect(process.env.MONGOLAB_URI , { 
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

console.log('Prod - listening on ' + port);

module.exports = app;