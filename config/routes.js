var users = require('./../controllers/users');
var items = require('./../controllers/items');
var categories = require('./../controllers/categories');
var validateSession = require('./middlewares/auth').validateSession;



module.exports = function (app) {
  //users
  app.get('/login', users.login);
  app.get('/logout', users.logout);
  app.get('/newUser', users.createUser);
  app.get('/changePass', validateSession, users.changePass);
  app.get('/changeEmail', validateSession, users.changeEmail);

  //items
  app.get('/addItem', validateSession, items.addItem);
  app.get('/addMultipleItems', validateSession, items.addMultipleItems);
  app.get('/deleteItem', validateSession, items.deleteItem);
  app.get('/getInit', validateSession, items.getInit);
  app.get('/getMonth', validateSession, items.getMonth);
  
  //categories
  app.get('/addCategory', validateSession, categories.add);
  app.get('/deleteCategory', validateSession, categories.remove);
  app.get('/getCategoryTotal', validateSession, categories.getTotals);

  app.use(function (err, req, res, next) {
    console.error(err.trace);
    res.status(500).send(err.toString());
  });

  app.use(function (req, res) {
    res.status(404).send("Not Found");
  })
}