var path = require('path')
  , fs = require('fs')
  , databaseUrl = process.env.MONGOLAB_URI || "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , nodeurl = require('url')
  , qs = require('qs')
  , util = require('util')
  , async = require('async')
  , mongoose = require('mongoose')
  , helpers = require('./helpers')
  , validateSession = require('./helpers').validateSession
  , requestHash = require('./helpers').requestHash
  , sanitizeString = require('./helpers').sanitizeString;
  //, express = require('express');

require(__dirname + '/models/User');

var connectMongoose = function () {
    mongoose.connect(process.env.MONGOLAB_URI , { 
        server: { 
            socketOptions: { 
                keepAlive: 1 
            } 
        }
    });
};
connectMongoose();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connectMongoose);

var User = mongoose.model('User');

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



// handles static content
function serveStatic(req, res) {
    console.log(req.url)
    var filePath;
    if (req.url == '/') {
        filePath = __dirname+'/public/index.html';
    } else {
        filePath = __dirname+"/public"+req.url;
    }
    console.log(filePath)
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


var userController = require('./controllers/users');
var itemsController = require('./controllers/items');
var categoriesController = require('./controllers/categories');

// handles incoming requests
function handler(req, res) {
    sanitizeString(req, res, function (ret) {
        if (!ret) {
            console.log('URL too long');
            res.writeHead(414);
            res.end();
            return;
        } else {

            var q = qs.parse(nodeurl.parse(req.url).query);
            var patharray = nodeurl.parse(req.url).pathname.split('/');
            var filePath = '.' + req.url;
            var p = patharray[1];

            if (p == 'newUser') {
                if (q.name && q.pass) {
                    return userController.createUser(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'changePass') {
                if (q.name && q.sess && q.oldPass && q.newPass) {
                    return userController.changePass(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'changeEmail') {
                if (q.name && q.sess && q.email) {
                    return userController.changeEmail(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name and email');
                }
            } else if (p == 'login') {
                if (q.name && q.pass) {
                    return userController.login(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name and pass');
                }
            } else if (p == 'logout') {
                if (q.name) {
                    return userController.logout(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name');
                }
            } else if (p == 'addItem') {
                if (q.name && q.sess && q.year && q.day && q.month && q.amt && q.cat && q.desc && q.itemid) {
                    return itemsController.addItem(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session, year, month, day, amount, category, description, itemid');
                }
            } else if (p == 'addMultipleItems') {
                if (q.name && q.sess) {
                    return itemsController.addMultipleItems(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session');
                }
            } else if (p == 'deleteItem') {
                if (q.name && q.sess && q.year && q.day && q.month && q.itemid) {
                    return itemsController.deleteItem(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session, year, month, day, and itemid');
                }
            } else if (p == 'addCategory') {
                if (q.name && q.sess && q.cat) {
                    return categoriesController.addCategory(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session, and category');
                }
            } else if (p == 'deleteCategory') {
                if (q.name && q.sess && q.cat) {
                    return categoriesController.deleteCategory(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session, and category');
                }
            } else if (p == 'getInit') {
                if (q.name && q.sess) {
                    return itemsController.getInit(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name and session');
                }
            } else if (p == 'getMonth') {
                if (q.name && q.sess && q.year && q.month) {
                    return itemsController.getMonth(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session, year, and month');
                }
            } else if (p == 'getCategoryTotals') {
                if (q.name && q.sess) {
                    return categoriesController.getCategoryTotals(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session');
                }
            } else if (p == 'getIncomePerDay') {
                if (q.name && q.sess) {
                    return itemsController.getIncomePerDay(req, res, q);
                } else {
                    helpers.resondInsufficient(req, res, 'Requires name, session');
                }
            } else {
                serveStatic(req, res);
                return;
            }
        }
    });
}



// parameters for regular port or dev port

module.exports = handler;






