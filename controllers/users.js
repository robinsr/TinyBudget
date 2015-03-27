var User = require('mongoose').model('User')
, helpers = require('./../helpers')
, databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
, collections = ["sessions"]
, db = require("mongojs").connect(databaseUrl, collections)

module.exports.login = function (req, res, query) {
  User.findOne({ name: query.name }, function (err, user) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.toString());
      return 
    }

    if (!user) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('User not found');
      return;
    }


    if (!user.authenticate(query.pass)) {
      console.log(query.pass)
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid Username or Password');
      return;
    }

    helpers.requestHash(function(hash){
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ sessionid: hash })); 
      db.sessions.insert({user:query.name,session:hash})
    });
  });
}

module.exports.logout = function (req, res, query) {
  db.sessions.remove({user:query.name},function(err,r){
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.toString());
      return 
    } if (!r) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('No session found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Logged Out');
    }
  })
}

module.exports.createUser = function (req, res, query) {
  User.create({ 
    email: query.email,
    name: query.name,
    password: query.pass,
  }, function (err) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.toString());
      return;
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success! created account for ' + query.name);
    }
  });
}

module.exports.changeEmail = function (req, res, q){
  helpers.validateSession(q.name, q.sess, function (ex) {
    if (!ex) {
      respondInsufficient(req, res, "failed auth at changePass");
      return
    } else {
      User.load({ name: q.name }, function (err, user) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(err.toString());
          return
        }

        if (!user) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Could not find user '+q.name);
          return
        }

        user.email = q.email;

        user.save(function (err) {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.toString());
            return
          }

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Email successfully changed');
        });
      });
    }
  })
}

module.exports.changePass = function (req, res, q) {
  helpers.validateSession(q.name, q.sess, function (ex) {
    if (!ex) {
      respondInsufficient(req, res, "failed auth at changePass");
      return
    } else {

      User.load({ name: q.name }, function (err, user) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(err.toString());
          return
        }

        if (!user) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Could not find user '+q.name);
          return
        }

        user.password = q.newPass;

        user.save(function (err) {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.toString());
            return
          }

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Pass successfully changed');
        });
      });
    }
  });
}