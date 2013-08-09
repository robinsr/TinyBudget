var app = require('http').createServer(handler)
  , path = require('path')
  , fs = require('fs')
  , databaseUrl = "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , nodeurl = require('url')
  , crypto = require('crypto')
  , qs = require('qs')
  , util = require('util')
  , moment = require('moment')
  , async = require('async');

var mimeType = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.ttf': 'application/x-font-ttf',
    '.otf': 'application/x-font-opentype',
    '.woff': 'application/x-font-woff',
    '.eot': 'application/vnd.ms-fontobject',
    '': 'text/html'
};

function itemMonth(obj){
    this.month = obj.month;
    this.year = obj.year;
    this.query_short = obj.year + obj.month;
    this.items = [];
}
function item(obj){
    this.cat = obj.cat;
    this.flagged = obj.flagged;
    this.comment = obj.comment;
    this.amount = obj.amount;
    this.desc = obj.desc;
    this.itemid = obj.itemid;
}
var todays_date = {}

    // some really weird stuff happens here arount the 30th and 31st of some months
    // date object results in month: 5, one_month_back: 5, two_month_back: 3. 5, 5, and 3????
    // moved to moment.js to see if dates are more consistent
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

    console.log(util.inspect(todays_date))
}
function requestHash(cb) {
    crypto.randomBytes(16, function (ex, buf) {
        if (ex) throw ex;
        console.log('randomness=' + buf.toString('hex'))
        cb(buf.toString('hex'));
        return;
    })
}
function respondInsufficient(req, res, message) {
    if (message) { console.log(message); }
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(message);
    return;
}
function validateSession(n, s, cb) {
    console.log(n, s)

    // so that demos work regardless of sessions. its a problem if there are two people
    // trying to use the demo account at once
    if (n === 'demo') {
        console.log('demo session ' + s);
        cb(true);

        // regular session validation
    } else {
        db.sessions.findOne({user:n}, function (ex, r) {
            if (r == null) {
                cb(false);
                return;
            } else if (r.session == s) {
                cb(true);
                return;
            } else {
                cb(false);
                return;
            }
        });
    }
}


function getMonth(req, res, query) {
    validateSession(query.name, query.sess, function (val) {
        if (!val) {
            respondInsufficient(req, res, "failed auth at getMonth");
            return;
        } else {
            db.items.findOne({user: query.name, year: query.year, month: query.month},{items:1},function(err, r){
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({}));
                } else if (r == null || r.items.length == 0){
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({}));
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({items: r.items}));
                }
            })
        }
    });
}

function getInit(req, res, query) {
    validateSession(query.name, query.sess, function (val) {
        if (!val) {
            respondInsufficient(req, res, "failed auth at getInit");
            return;
        } else {
            var return_ob = {};
            return_ob.date = JSON.parse(JSON.stringify(todays_date));
            return_ob.items = [];

            async.parallel([function(cb){
                db.users.findOne({user: query.name},function (err, user) {
                    if (err) {
                        cb('error!')
                    } else {
                        return_ob.categories = user.categories;
                        cb(null);
                    }
                });
            },
            function(cb){
                var query_upper_bound = todays_date.year + todays_date.month;
                var query_lower_bound = todays_date.two_month_back_yr + todays_date.two_month_back;

                db.items.find({user: query.name, query_short: {$gte : query_lower_bound, $lte: query_upper_bound}},function(err,monthItemIds){
                    if (err) {
                        cb('error!')
                    } else {
                        async.each(monthItemIds,function(monthItemId,cbb){
                            db.findOne({_id:monthItemId},function(monthItem){
                                monthItem.items.forEach(function(item){
                                    return_ob.items.push(item);
                                    cbb(null);
                                })
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
                    res.end('Server Problems');
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(return_ob));                        
                }
            })
        }
    })
}
function deleteCategory(req, res, query) {
    validateSession(query.name, query.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at deleteCategory");
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
function addCategory(req, res, query) {
    validateSession(query.name, query.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at addCategory");
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
function deleteItem(req, res, query) {
    validateSession(query.name, query.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at deleteItem");
            return;
        } else {
            var query = {user: query.name, year: query.year, month: query.month};
            var modify = {$pull:{items:{itemid:query.itemid}}}
            db.items.findAndUpdate(query,modify,function(err,r){
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

// adds new id to item id none exists - dont need any more 
function checkQueryItemId(query, cb) {
    var itemid = '';
    if (query.itemid) {
        itemid = query.itemid
        cb(itemid)
    } else {
        requestHash(function (rand) {
            itemid = rand;
            cb(itemid)
        });
    }
}

 /*
  * 
function addMultipleItems(req,res,query){
  console.log('called mutli')
  validateSession(query.name,query.sess,function(ex){
    if (!ex){
      respondInsufficient(req,res,"failed auth at addMultipleItems")
      return;
    } else {
      console.log('passed session check')
      var blob = '';
      req.on('data',function(chunk){
        console.log('data' +chunk.toString())
        blob += chunk;
      })
      req.on('end',function(){
        console.log('request ended');
        var response = '';
        var responseCode = 200;
        var items = JSON.parse(blob);
        var count = 0
        
        function addThisItem(){
          console.log('adding item')
          var thisItem = items[count]
          var rediskey = "items:" + query.name + ":" + thisItem.year + ":" + thisItem.month;
          client.sadd(redisKey,JSON.stringify(item),function(err){
            if (err) {
              console.log('error adding to redis')
              response += 'Error adding '+thisItem.itemID+"\n";
              responseCode = 500;
            }
            if (count >= items.length-1){
              res.writeHead(responseCode);
              res.end(response);
            } else {
              count++
              addThisItem();
            }
          })
        }
        addThisItem();
        console.log('went too far');
      });
    }
  });
}
 *
 */

function addItem(req, res, query) {
    validateSession(query.name, query.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at addItem");
            return
        } else {
            var newItem = new item({
                    cat : query.cat,
                    flagged : query.isflagged ? query.isflagged : false,
                    comment : query.comment ? query.comment : '',
                    amount : query.amount,
                    desc : query.desc,
                    itemid : query.itemid
            });

            var query = {user: query.name, year: query.year, month: query.month};
            var modify = {$addToSet:{items:newItem}}

            db.items.findAndModify(query,modify,function(err,result){
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error adding item');
                    return
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Item Added: ' + itemid);
                    return
                }
            })
        }
    })
}
function logout(req, res, query) {
    db.sessions.remove({user:query.name},function(err,r){
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Logged Out');
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('No session found');
        }
    })
}
function login(req, res, query) {
    db.sessions.findOne({user:query.name},function(err,result){
        if (err){
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else if (result == null){
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('User not found');
        } else {
            var concat_pass = query.pass + result.salt;
            var hashed_pass = crypto.createHash('md5').update(concat_pass).digest('hex');
            if (hashed_pass == result.pass) {
                requestHash(function(hash){
                    return_object = {
                        sessionid : session_val,
                        email: result.email
                    }
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(return_object));
                    db.sessions.insert({user:query.name,session:hash})
                })
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid Username or Password');
                return;
            }
        }
    })
}

function createUser(req, res, query) {
    db.users.findOne({user:query.name},function(err,result){
        if (err){

        } else if (result != null){
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Account exists for ' + query.name);
        } else {
            requestHash(function (hash_salt) {
                var hashed_pass_and_salt = crypto.createHash('md5').update(query.pass + hash_salt).digest('hex');
                db.users.insert({
                    name: query.name,
                    email: query.email,
                    pass: hashed_pass_and_salt,
                    salt: hash_salt
                },function (err, rr) {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Error creating user');
                        return;
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('Success! created account for ' + query.name + ' with this ' + rrr);
                    }
                });
            });
        }
    });
}
function changeEmail(req,res,q){
    validateSession(q.name, q.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at changePass");
            return
        } else {
            db.users.findAndModify({
                query: {user:query.name},
                update: {
                    $set: { email: query.email }
                },
                new: true,
            },function(er,result){
                if (er){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Pass successfully changed');
                }
            })
        }
    })
}
function isHash(hash,cb){
    var p = /[0-9a-f]{32}/;
    cb(p.test(hash))
}
function changePass(req, res, q) {
    validateSession(q.name, q.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at changePass");
            return
        } else {
            db.users.findOne({user:query.name},function(er,result){
                if (er){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error');
                } else if (result == null){
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Could not find user '+q.name);
                } else {
                    var combined = q.oldPass + result.salt;
                    var hashCheck = crypto.createHash('md5').update(combined).digest('hex');
                    if (hashCheck == result.pass){
                        newPass = crypto.createHash('md5').update(q.newPass+user.salt).digest('hex');
                        db.users.findAndModify({
                            query: {user:query.name},
                            update: {
                                $set: { pass: newPass }
                            },
                            new: true,
                        },function(er,result){
                            if (er){
                                res.writeHead(500, { 'Content-Type': 'text/plain' });
                                res.end('Server Error');
                            } else {
                                res.writeHead(200, { 'Content-Type': 'text/plain' });
                                res.end('Pass successfully changed');
                            }
                        })
                    } else {
                        res.writeHead(400, { 'Content-Type': 'text/plain' });
                        res.end('Incorrect Password');
                    }                                
                }
            })
        }
    });
}

// handles static content
function serveStatic(req, res) {
    var filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }
    fs.exists(filePath, function (exists) {
        if (exists) {

            fs.readFile(filePath, function (error, content) {
                if (error) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end();
                }
                else {
                    res.writeHead(200, { 'Content-Type': mimeType[path.extname(filePath)] });
                    res.end(content, 'utf-8');
                }
            });
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 - Not Found - '+filePath);
        }
    });
}
function sanitizeString(req, next) {

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

// handles incoming requests
function handler(req, res) {
    sanitizeString(req, function (ret) {
        if (!ret) {
            console.log('URL too long');
            res.writeHead(414);
            res.end();
            return;
        } else {

            // dev server only, remove for production
            req.url = req.url.replace('/TinyBudget', '');
            req.url = req.url.replace('/dev', '');


            var q = qs.parse(nodeurl.parse(req.url).query);
            var patharray = nodeurl.parse(req.url).pathname.split('/');
            var filePath = '.' + req.url;
            var p = patharray[1];

            if (p == 'newUser') {
                if (q.name && q.pass) {
                    createUser(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'changePass') {
                if (q.name && q.sess && q.oldPass && q.newPass) {
                    changePass(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'changeEmail') {
                if (q.name && q.sess && q.email) {
                    changeEmail(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'login') {
                if (q.name && q.pass) {
                    login(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'logout') {
                if (q.name) {
                    logout(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name');
                }
            } else if (p == 'addItem') {
                if (q.name && q.sess && q.year && q.day && q.month && q.amt && q.cat && q.desc && q.itemid) {
                    addItem(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session, year, month, day, amount, category, description, itemid');
                }
            } else if (p == 'addMultipleItems') {
                if (q.name && q.sess) {
                    addMultipleItems(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session');
                }
            } else if (p == 'deleteItem') {
                if (q.name && q.sess && q.year && q.day && q.month && q.itemid) {
                    deleteItem(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session, year, month, day, and itemid');
                }
            } else if (p == 'addCategory') {
                if (q.name && q.sess && q.cat) {
                    addCategory(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session, and category');
                }
            } else if (p == 'deleteCategory') {
                if (q.name && q.sess && q.cat) {
                    deleteCategory(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session, and category');
                }
            } else if (p == 'getInit') {
                if (q.name && q.sess) {
                    getInit(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name and session');
                }
            } else if (p == 'getYear') {
                if (q.name && q.sess && q.year) {
                    getYear(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session, and year');
                }
            } else if (p == 'getMonth') {
                if (q.name && q.sess && q.year && q.month) {
                    getMonth(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session, year, and month');
                }
            } else {
                serveStatic(req, res);
                return;
            }
        }
    });
}

setTodaysDate();

// parameters for regular port or dev port

if (process.argv[2] == '-d'){
    app.listen(8125)
    console.log('Dev - listening on 8125')
} else {
    app.listen(8124);
    console.log('Prod - listening on 8124')
}






