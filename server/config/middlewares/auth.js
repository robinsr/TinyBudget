var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Session = mongoose.model('Session');

module.exports.validateSession = function(req, res, next) {
  if (!req.query.name || !req.query.sess) {
    return next(new Error('Requires username and session token'));
  }

  // regular session validation
  Session.findOne({ name: req.query.name }, function (ex, session) {
    if (!session) {
      return res.status(401).send('Not Logged In');
    }

    if (session.token !== req.query.sess) {
      return res.status(403).send('Not Authorized');
    }

    User.findOne({ name: req.query.name }, function (err, user) {
      if (err) return next(err);
      if (!user) return res.status(403).send('Not Authorized');
      req.user = user;
      next();
    });
  });
}