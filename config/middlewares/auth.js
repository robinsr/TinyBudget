var databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
  , collections = ["sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , mongoose = require('mongoose')
  , User = mongoose.model('User');

module.exports.validateSession = function(req, res, next) {
  if (!req.query.name || !req.query.sess) {
    return next(new Error('Requires username and session token'));
  }

  // so that demos work regardless of sessions. its a problem if there are two people
  // trying to use the demo account at once
  if (req.query.name === 'demo') return next()

  // regular session validation
  db.sessions.findOne({ user: req.query.name }, function (ex, session) {
    if (session == null) {
      return res.status(403).send('Not Authorized');
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