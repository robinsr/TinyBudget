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
  app.get('/addItem', validateSession, items.add);
  app.get('/addMultipleItems', validateSession, items.addMultiple);
  app.get('/deleteItem', validateSession, items.deleteItem);
  app.get('/getInit', validateSession, items.getInit);
  app.get('/getMonth', validateSession, items.getMonth);
  app.get('/getIncomePerDay', validateSession, items.getIncomePerDay);
  
  //categories
  app.get('/addCategory', validateSession, categories.add);
  app.get('/deleteCatefory', validateSession, categories.remove);
  app.get('/getCategoryTotal', validateSession, categories.getTotals);
}