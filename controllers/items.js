var User = require('mongoose').model('User')
, databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
, collections = ["items"]
, db = require("mongojs").connect(databaseUrl, collections)
, async = require('async')
, moment = require('moment')
, extend = require('util')._extend;


function item(obj){
    this.cat = obj.cat;
    this.isflagged = obj.isflagged || null;
    this.comment = obj.comment || '';
    this.amt = parseFloat(obj.amt).toFixed(2) * 100;
    this.desc = obj.desc;
    this.itemid = obj.itemid;
    this.day = parseInt(obj.day);
    this.month = parseInt(obj.month);
    this.year = parseInt(obj.year);
    this.query_short = (parseInt(obj.year * 100)) + parseInt(obj.month),
    this.owner = obj.owner || obj.name;
}

function delItem(obj){
    this.itemid = obj.itemid;
    this.day = parseInt(obj.day);
    this.month = parseInt(obj.month);
    this.year = parseInt(obj.year);
    this.owner = obj.owner || obj.name;
}

module.exports.addItem = function (req, res, next) {
  var newItem = new item(req.query);
  args = {
    'query': { itemid: newItem.itemid },
    'update': newItem,
    'upsert': true
  }
  db.items.findAndModify(args, function (err, result) {
    if (err) return next(err);
    res.status(200).send('Item Added: ' + newItem.itemid);
  });
}

module.exports.deleteItem = function (req, res, next) {
  var newDelItem = new delItem(req.query);
  db.items.remove(newDelItem, function (err){
    if (err) return next(err);
    res.status(200).send('Item Removed');
  });
}

module.exports.addMultipleItems = function (req, res, next) {
  var blob = '';

  req.on('data',function (chunk){
    blob += chunk;
  });

  req.on('end',function(){
    var newItems = JSON.parse(blob);
    var rejectedItems = [];
    async.eachSeries(newItems,function (newItem, nextItem) {
      
      var item = new item(extend(newItem, {
        owner: req.query.name
      }));

      db.items.findAndModify({
        query: { itemid: newItemObj.itemid },
        update: newItemObj,
        upsert: true
      }, nextItem);

    },function (err){
      if (err) return next(err);
      res.status(200).send('Items Added Successfully');
    });
  });
}

function getTodaysDate() {    
  return {
    year: moment().year(),
    day: moment().day(),
    month: moment().month() + 1,
    one_month_back: moment().subtract('month',1).month() + 1,
    one_month_back_yr: moment().subtract('month',1).year(),
    two_month_back: moment().subtract('month',2).month() + 1,
    two_month_back_yr: moment().subtract('month',2).year()
  }
}

module.exports.getInit = function (req, res, next) {

  var _date = getTodaysDate();

  async.parallel({
    categories: function (cb) {
      User.findOne({ name: req.query.name }, function (err, user) {
        cb(err, user.categories);
      });
    },

    items: function (cb) {
      var query_upper_bound = (_date.year * 100) + _date.month;
      var query_lower_bound = (_date.two_month_back_yr * 100) + _date.two_month_back;

      var options = {
        owner: req.query.name, 
        query_short: {
          $gte : query_lower_bound, 
          $lte: query_upper_bound
        }
      };

      db.items.find(options, function (err, items) {
        if (err) return cb(err);

        items = items.forEach(function (elem) {
          elem.amt = (elem.amt / 100).toFixed(2);
        });

        cb(null, items);
      });
    }
  }, function (err, result) {
    if (err) return next(err);
    res.status(200).json(extend(result, {
      date: _date
    }));                        
  });
}

module.exports.getMonth = function (req, res, next) {
  var args = {
    owner: req.query.name,
    year: parseInt(req.query.year),
    month: parseInt(req.query.month)
  };
  db.items.find(args, function (err, items) {
    if (err) return next(err);

    items = items.forEach(function (elem) {
      elem.amt = (elem.amt / 100).toFixed(2);
    });
  });
}