var databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
  , collections = ["sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , crypto = require('crypto');

module.exports.validateSession = function(n, s, cb) {
  // so that demos work regardless of sessions. its a problem if there are two people
  // trying to use the demo account at once
  if (n === 'demo') return cb(true);
  
  // regular session validation
  db.sessions.findOne({user:n}, function (ex, r) {
    if (r == null) {
      return cb(false);
    }

    if (r.session !== s) {
      return cb(false);
    }

    return cb(true);
  });
}

module.exports.requestHash = function(cb) {
  crypto.randomBytes(16, function (ex, buf) {
    if (ex) throw ex;
    return cb(buf.toString('hex'));
  });
}