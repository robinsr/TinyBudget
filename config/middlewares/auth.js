var databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
  , collections = ["sessions"]
  , db = require("mongojs").connect(databaseUrl, collections);

module.exports.validateSession = function(req, res, next) {
  if (!req.query.name || !req.query.sess) {
    return next(new Error('Requires username and session token'));
  }

  // so that demos work regardless of sessions. its a problem if there are two people
  // trying to use the demo account at once
  if (req.query.name === 'demo') return next()

  // regular session validation
  db.sessions.findOne({ user:req.query.name }, function (ex, user) {
    if (user == null) {
      return next(new Error('Not Authorized'));
    }

    if (user.session !== req.query.sess) {
      return next(new Error('Not Authorized'));
    }

    return next();
  });
}