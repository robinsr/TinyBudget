var mongoose = require('mongoose')
, User = mongoose.model('User')
, Session = mongoose.model('Session')
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

    Session.findOne({ name: req.query.name }, function (err, session) {
      if (err) return next(err);
      if (session) return res.status(200).json({ sessionid: session.token }); 
      Session.create({ name: req.query.name }, function (err, session) {
        if (err) return next(err);
        res.status(200).json({ sessionid: session.token }); 
      });
    });
  });
}

module.exports.logout = function (req, res, next) {
  Session.collection.remove({ name: req.query.name }, function (err, affected) {
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