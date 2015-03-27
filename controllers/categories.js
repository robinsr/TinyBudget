var databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
, collections = ["users"]
, db = require("mongojs").connect(databaseUrl, collections)
, async = require('async')
, moment = require('moment')
, helpers = require('./../helpers')
, stats = require('./../dbScripts/stats')



module.exports.addCategory = function (req, res, query) {
  helpers.validateSession(query.name, query.sess, function (ex) {
    if (!ex) {
      helpers.resondInsufficient(req, res, "failed auth at addCategory");
      return;
    } else {
      db.users.update({ user:query.name },{ $addToSet:{ categories: query.cat}},function(err,r){
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error Adding Category');
          return;
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Added category: ' + query.cat);
          return;
        }
      })
    }
  });
}

module.exports.deleteCategory = function (req, res, query) {
  helpers.validateSession(query.name, query.sess, function (ex) {
    if (!ex) {
      helpers.resondInsufficient(req, res, "failed auth at deleteCategory");
      return;
    } else {
      db.users.update({ user:query.name },{ $pull:{ categories: query.cat}},function(err,r){
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error Removing Category');
          return;
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Removed category: ' + query.cat);
          return;
        }
      })
    }
  });
}

module.exports.getCategoryTotals = function (req, res, query){
  validateSession(query.name, query.sess, function (val) {
    if (!val) {
      helpers.resondInsufficient(req, res, "failed auth at getCategoryTotals");
      return;
    } else {
      stats.categoryTotals(query,function(err,result){
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({}));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        }
      })
    }
  });
}