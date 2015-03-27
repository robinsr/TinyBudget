var databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
  , collections = ["sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , crypto = require('crypto')
  , nodeurl = require('url')
  , qs = require('qs')
  , async = require('async');

module.exports.validateSession = function(n, s, next) {
  // so that demos work regardless of sessions. its a problem if there are two people
  // trying to use the demo account at once
  if (n === 'demo') return next(true);

  // regular session validation
  db.sessions.findOne({user:n}, function (ex, r) {
    if (r == null) {
      return next(false);
    }

    if (r.session !== s) {
      return next(false);
    }

    return next(true);
  });
}

module.exports.requestHash = function(cb) {
  crypto.randomBytes(16, function (ex, buf) {
    if (ex) throw ex;
    return cb(buf.toString('hex'));
  });
}

module.exports.resondInsufficient = function (req, res, message) {
    if (message) { console.log(message); }
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    return res.end(message);
}

module.exports.sanitizeString = function (req, res, next) {

    // limits on character length of each property
    var lengthLimits = {
        'name': 32,
        'pass': 32,
        'sess': 32,
        'day': 2,
        'month': 2,
        'year': 4,
        'isflagged': 5,
        'amt': 8,
        'desc': 120,
        'itemid': 32,
        'cat': 32,
        'comment': 400,
    };

    // limit on the length of the url as a whole; equal to all length Limits combined
    if (req.url.length > 701) {
        res.writeHead(414);
        res.end();
        next(null)
    } else {

        // construct object with query params
        var q = qs.parse(nodeurl.parse(req.url).query);

        // array of expected queries
        var expected = ['name', 'pass', 'sess', 'day', 'month', 'year', 'comment', 'isflagged', 'cat', 'amt', 'desc', 'itemid'];

        // for each parm, its either present and too long, present and fine, or not present. call error when too long
        async.each(expected,function(param,cb){
            if (!q[param]) {
                cb(null)
            } else if (q[param].length <= lengthLimits[param]) {
                cb(null)
            } else {
                cb('error!')
            }
        },function(err,result){
            if (err == null){
                next(true)
            }
        })
    }
}

module.exports.handleError = function (req, res, err) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  return res.end(err.toString());
}