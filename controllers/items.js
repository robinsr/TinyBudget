var mongoose = require('mongoose')
, User = mongoose.model('User')
, Item = mongoose.model('Item')
, async = require('async')
, moment = require('moment')
, extend = require('util')._extend;

module.exports.addItem = function (req, res, next) {
  Item.load(req.query.itemid, function (err, item) {
    if (err) return next(err);
    if (item) {
      item = extend(item, req.query);
    } else {
      item = new Item(req.query);
    }

    item.owner = req.user;

    item.save(function (err, result) {
      if (err) return next(err);
      res.status(200).send('Item Added: ' + item.itemid);
    });
  });
}

module.exports.deleteItem = function (req, res, next) {
  Item.findOneAndRemove({ itemid: req.query.itemid }, function (err) {
    if (err) return next(err);
    res.status(200).send('Item Removed: ' + req.query.itemid);
  });
}

module.exports.addMultipleItems = function (req, res, next) {
  var blob = '';

  req.on('data',function (chunk){
    blob += chunk;
  });

  req.on('end',function(){
    var newItems = JSON.parse(blob);
    async.eachSeries(newItems,function (newItem, nextItem) {
      
      var item = new Item(extend(newItem, {
        owner: req.user
      }));

      item.save(nextItem);

    }, function (err) {
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
    one_month_back: moment().subtract(1, 'month').month() + 1,
    one_month_back_yr: moment().subtract(1, 'month').year(),
    two_month_back: moment().subtract(2, 'month').month() + 1,
    two_month_back_yr: moment().subtract(2, 'month').year()
  }
}

module.exports.getInit = function (req, res, next) {
  var _date = getTodaysDate();
  var options = {
    owner: req.user._id, 
    date: {
      $gte : moment().subtract(2, 'month').toISOString(),
      $lte: moment().toISOString()
    }
  };

  Item.find(options, function (err, items) {
    if (err) return next(err);
    res.status(200).json({
      items: items,
      categories: req.user.categories,
      date: _date,
    });
  });
}

module.exports.getMonth = function (req, res, next) {
  var args = {
    owner: req.query._id,
    year: parseInt(req.query.year),
    month: parseInt(req.query.month)
  };
  Item.find(args, function (err, items) {
    if (err) return next(err);
    res.status(200).json({ items: items });
  });
}