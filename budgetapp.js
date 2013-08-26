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
  , async = require('async')
  , stats = require('./stats');

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

function getCategoryTotals(req, res, query){
    validateSession(query.name, query.sess, function (val) {
        if (!val) {
            respondInsufficient(req, res, "failed auth at getCategoryTotals");
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

function getIncomePerDay(req, res, query){
    validateSession(query.name, query.sess, function (val) {
        if (!val) {
            respondInsufficient(req, res, "failed auth at getIncomePerDay");
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
function getMonth(req, res, query) {
    validateSession(query.name, query.sess, function (val) {
        if (!val) {
            respondInsufficient(req, res, "failed auth at getMonth");
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

function getInit(req, res, query) {
    validateSession(query.name, query.sess, function (val) {
        if (!val) {
            respondInsufficient(req, res, "failed auth at getInit");
            return;
        } else {
            var return_ob = {};
            return_ob.date = JSON.parse(JSON.stringify(todays_date));
            return_ob.items = [];
            return_ob.categories = [];

            async.series([function(cb){
                db.users.findOne({user: query.name},function (err, user) {
                    if (err) {
                        cb('error!')
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

function addMultipleItems(req,res,query){
	validateSession(query.name,query.sess,function(ex){
		if (!ex){
			respondInsufficient(req,res,"failed auth at addMultipleItems")
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

function addItem(req, res, query) {

    validateSession(query.name, query.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at addItem");
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
    db.users.findOne({user:query.name},function(err,result){
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
                return_object = {
                    email: result.email
                }
                db.sessions.findOne({user:query.name},function(err,session){
                    if (err){
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Server Error');
                    } else if (session != null) {
                        return_object.sessionid = session.session;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(return_object));
                    } else {
                        requestHash(function(hash){
                            return_object.sessionid = hash;
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify(return_object)); 
                            db.sessions.insert({user:query.name,session:hash})
                        })
                    }
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
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error creating user');
        } else if (result != null){
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Account exists for ' + query.name);
        } else {
            requestHash(function (hash_salt) {
                var hashed_pass_and_salt = crypto.createHash('md5').update(query.pass + hash_salt).digest('hex');
                db.users.insert({
                    user: query.name,
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
                        res.end('Success! created account for ' + query.name);
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
            var args = {
                'query': {user:q.name},
                'update': {$set: { email: q.email }}
            }
            db.users.findAndModify(args, function(er,result){
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
function changePass(req, res, q) {
    validateSession(q.name, q.sess, function (ex) {
        if (!ex) {
            respondInsufficient(req, res, "failed auth at changePass");
            return
        } else {

            db.users.findOne({user:q.name},function(er,result){
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
                        newPass = crypto.createHash('md5').update(q.newPass+result.salt).digest('hex');
                        var args = {
                            'query': {user:q.name},
                            'update': {$set: { pass: newPass }}
                        }
                        db.users.findAndModify(args,function(er,result){
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
function sanitizeString(req, res, next) {

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
    sanitizeString(req, res, function (ret) {
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
            } else if (p == 'getCategoryTotals') {
                if (q.name && q.sess) {
                    getCategoryTotals(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session');
                }
            } else if (p == 'getIncomePerDay') {
                if (q.name && q.sess) {
                    getIncomePerDay(req, res, q);
                    return;
                } else {
                    respondInsufficient(req, res, 'Requires name, session');
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






