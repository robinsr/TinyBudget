var User = require('mongoose').model('User')
, helpers = require('./../helpers')
, databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
, collections = ["items"]
, db = require("mongojs").connect(databaseUrl, collections)
, async = require('async')
, moment = require('moment')
, stats = require('./../dbScripts/stats')


function item(obj){
    this.cat = obj.cat;
    this.isflagged = obj.isflagged;
    this.comment = obj.comment;
    this.amt = parseFloat(obj.amt).toFixed(2) * 100;
    this.desc = obj.desc;
    this.itemid = obj.itemid;
    this.day = parseInt(obj.day);
    this.month = parseInt(obj.month);
    this.year = parseInt(obj.year);
    this.query_short = (parseInt(obj.year * 100)) + parseInt(obj.month),
    this.owner = obj.name;
}

function delItem(obj){
    this.itemid = obj.itemid;
    this.day = parseInt(obj.day);
    this.month = parseInt(obj.month);
    this.year = parseInt(obj.year);
    this.owner = obj.name;
}

module.exports.addItem = function (req, res, query) {
    validateSession(query.name, query.sess, function (ex) {
        if (!ex) {
            helpers.helpers.resondInsufficient(req, res, "failed auth at addItem");
            return
        } else {
            var newItem = new item(query);
            console.log(newItem);
            args = {
                'query': {itemid: newItem.itemid},
                'update': newItem,
                'upsert':true
            }
            db.items.findAndModify(args, function(err,result){
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error adding item');
                    return
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Item Added: ' + newItem.itemid);
                    return
                }
            })
        }
    })
}

module.exports.deleteItem = function (req, res, query) {
  helpers.validateSession(query.name, query.sess, function (ex) {
    if (!ex) {
      helpers.resondInsufficient(req, res, "failed auth at deleteItem");
      return;
    } else {
      var newDelItem = new delItem(query);
      db.items.remove(newDelItem,function(err,r){
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error removing');
          return
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Item Removed');
          return
        }
      })
    }
  })
}

module.exports.addMultipleItems = function (req,res,query){
  helpers.validateSession(query.name,query.sess,function(ex){
    if (!ex){
      helpers.resondInsufficient(req,res,"failed auth at addMultipleItems")
      return;
    } else {
      var blob = '';
      req.on('data',function(chunk){
        blob += chunk;
      })
      req.on('end',function(){
        var newItems = JSON.parse(blob);
        var rejectedItems = [];
        async.eachSeries(newItems,function(newItem,callback){
          newItem.isflagged = false;
          newItem.comment = '';
          newItem.name = query.name;
          var newItemObj = new item(newItem);
          console.log(newItemObj)
                    args = {
                        'query': {itemid: newItemObj.itemid},
                        'update': newItemObj,
                        'upsert':true
                    }
          db.items.findAndModify(args,function(err,r){
                    if (err) {
                      rejectedItems.push(newItemObj);
                        callback(1);
                    } else {
                        callback(null)
                    }
                })
        },function(err){
          if (err) {
                      res.writeHead(500, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({rejected_items: rejectedItems}));
                      return
                  } else {
                      res.writeHead(200, { 'Content-Type': 'text/plain' });
                      res.end('Items Added Successfully');
                      return
                  }
        })
      res.writeHead(200);
      res.end();
      });
    }
  });
}

module.exports.getIncomePerDay = function (req, res, query){
  helpers.validateSession(query.name, query.sess, function (val) {
    if (!val) {
      helpers.resondInsufficient(req, res, "failed auth at getIncomePerDay");
      return;
    } else {
      stats.incomePerDay(query,function(err,result){
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

function setTodaysDate() {    
    todays_date = {
        year: moment().year(),
        day: moment().day(),
        month: moment().month() + 1,
        one_month_back: moment().subtract('month',1).month() + 1,
        one_month_back_yr: moment().subtract('month',1).year(),
        two_month_back: moment().subtract('month',2).month() + 1,
        two_month_back_yr: moment().subtract('month',2).year()
    }
}

module.exports.getInit = function (req, res, query) {
  helpers.validateSession(query.name, query.sess, function (val) {
    if (!val) {
      helpers.resondInsufficient(req, res, "failed auth at getInit");
      return;
    } else {
      setTodaysDate();
      var return_ob = {};
      return_ob.date = JSON.parse(JSON.stringify(todays_date));
      return_ob.items = [];
      return_ob.categories = [];

      async.parallel([
        function(cb){
          User.findOne({ name: query.name },function (err, user) {
            if (err) {
              cb(err)
            } else if (typeof user.categories == 'undefined') {
              cb(null);
            } else {
              return_ob.categories = user.categories;
              cb(null);
            }
          });
        },
        function(cb){
          var query_upper_bound = (todays_date.year * 100) + todays_date.month;
          var query_lower_bound = (todays_date.two_month_back_yr * 100) + todays_date.two_month_back;

          console.log(query_upper_bound,query_lower_bound);

          db.items.find({owner: query.name, query_short: {$gte : query_lower_bound, $lte: query_upper_bound}},function(err,itemIds){
            if (err) {
              cb('error!')
            } else {
              console.log('getting items')
              async.each(itemIds,function(itemid,cbb){
                console.log('finding '+itemid.itemid);
                db.items.findOne({itemid:itemid.itemid},function(err,thisItem){
                  thisItem.amt = (thisItem.amt/100).toFixed(2);
                  return_ob.items.push(thisItem)
                  cbb(null);
                })
              },function(err){
                if (err) {
                  cb('error!')
                } else {
                  cb(null);
                }
              })
            }
          })
        }],
        function(err,results){
          if (err){
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.toString());
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(return_ob));                        
          }
        })
    }
  })
}

module.exports.getMonth = function (req, res, query) {
  helpers.validateSession(query.name, query.sess, function (val) {
    if (!val) {
      helpers.resondInsufficient(req, res, "failed auth at getMonth");
      return;
    } else {
      var return_ob = []
      var args = {
        owner:query.name,
        year:parseInt(query.year),
        month:parseInt(query.month)
      }
      db.items.find(args,function(err,pointers){
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({}));
        } else {
          console.log(pointers);
          console.log('getting items')
          async.each(pointers,function(thisPointer,cbb){
            console.log('finding '+thisPointer.itemid);
            db.items.findOne({itemid:thisPointer.itemid},function(err,thisItem){
              thisItem.amt = (thisItem.amt/100).toFixed(2);
              return_ob.push(thisItem)
              cbb(null);
            })
          },function(err){
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({}));
            } else {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({items: return_ob}));
            }
          })
        }
      })
    }
  });
}