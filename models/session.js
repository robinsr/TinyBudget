var mongoose = require('mongoose')
  , crypto = require('crypto');

var sessionSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  token: String
});

sessionSchema.pre('save', function (next) {
  var session = this;
  if (!session.token) {
    return crypto.randomBytes(16, function (err, buf) {
      if (err) return next(err);
      session.token = buf.toString('hex');
      return next();
    });
  } 
  next();
});

mongoose.model('Session', sessionSchema);