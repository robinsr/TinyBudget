var User = require('mongoose').model('User')
, databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
, collections = ["sessions"]
, db = require("mongojs").connect(databaseUrl, collections)
, crypto = require('crypto')
, extend = require('util')._extend;

module.exports.login = function (req, res, next) {
  User.findOne({ name: req.query.name }, function (err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(400).send('User not found');
    }

    if (!user.authenticate(req.query.pass)) {
      return next(new Error('Invalid Username or Password'));
    }

  
    crypto.randomBytes(16, function (err, buf) {
      if (err) return next(err);

      var token = buf.toString('hex');

      db.sessions.findAndModify({
        query: {
          user: req.query.name
        },
        update: {
          $set: {
            token: token
          }
        },
        upsert: true
      }, function (err) {
        if (err) return next(err);
        res.status(200).json({ sessionid: token }); 
      });
    });
  });
}

module.exports.logout = function (req, res, next) {
  db.sessions.remove({ user: req.query.name }, function (err, affected) {
    if (err) return next(err);
    if (!affected) {
      return next(new Error('No session found'));
    }
    res.status(200).send('Logged Out');
  })
}

module.exports.createUser = function (req, res, next) {
  User.create({ 
    email: req.query.email,
    name: req.query.name,
    password: req.query.pass,
  }, function (err) {
    if (err) return next(err);
    res.status(200).send('Success! created account for ' + req.query.name);
  });
}

module.exports.update = function (req, res, next) {
  User.load({ name: req.query.name }, function (err, user) {
    if (err) return next(err);

    if (!user) {
      return next(new Error('Could not find user ' + req.query.name));      
    }

    user = extend(user, req.body);

    user.save(function (err) {
      if (err) return next(err);
      res.status(200).send('User Updated');
    });
  });
}

module.exports.changeEmail = function (req, res, next) {
  req.body = { email: req.query.email }
  return module.exports.update(req, res, next);
}

module.exports.changePass = function (req, res, next) {
  req.body = { password: req.query.newPass }
  return module.exports.update(req, res, next);
}