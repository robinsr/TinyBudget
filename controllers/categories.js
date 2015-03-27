var databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
, collections = ["users"]
, db = require("mongojs").connect(databaseUrl, collections)
, async = require('async')
, moment = require('moment')
, mongoose = require('mongoose')
, User = mongoose.model('User');



module.exports.add = function (req, res, next) {
  User.findOne({ name: req.query.name }, function (err, user) {
    if (err) return next(err);

    user.categories.push(req.query.cat);

    user.save(function (err) {
      if (err) return next(err);
      res.status(200).send('Added category: ' + req.query.cat);
    });
  });
}

module.exports.remove = function (req, res, next) {
  User.findOne({ name: req.query.name }, function (err, user) {
    if (err) return next(err);

    var index = user.categories.indexOf(req.query.cat);
    user.categories.splice(index, 1);

    user.save(function (err) {
      if (err) return next(err);
      res.status(200).send('Removed category: ' + req.query.cat);
    });
  });
}

module.exports.getTotals = function (req, res, next) {

  var conditions = {
    owner: req.query.name
  };

  if (req.query.lower && req.query.upper) {
    conditions.query_short = {
      $gte: parseInt(req.query.lower), 
      $lte: parseInt(req.query.upper)
    }
  } else if (req.query.month) {
    conditions.year = parseInt(req.query.year);
    conditions.month = parseInt(req.query.month);
  } else if (req.query.year) {
    conditions.year = parseInt(req.query.year);
  } 

  db.items.group({
    key: { cat:true },
    cond: conditions,
    initial: { items:0, amt:0, likely_day:0, avg:0 },
    reduce: function (doc, agg) {
      agg.items += 1;
      agg.amt += parseInt(doc.amt);
      agg.likely_day += parseInt(doc.day);
    },
    finalize: function (agg) {
      agg.avg = parseFloat((agg.amt/100)/agg.items).toFixed(2);
      agg.amt = (agg.amt/100).toFixed(2);
      agg.likely_day = parseInt(agg.likely_day/agg.items);
    }
  }, function (err, result){
    if (err) return next(err);
    res.status(200).send(result);
  });
}