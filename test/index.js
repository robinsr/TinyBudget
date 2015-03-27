
process.env.MONGOLAB_URI = 'mongodb://localhost/noobjs_test';

var app = require('./../app');
var fixtures = require('./fixtures');
var supertest = require('supertest');
var agent = supertest.agent(app);
var assert = require('assert');
var async = require('async');
var qs = require('qs');
var moment = require('moment');
var extend = require('util')._extend;
var session, user;

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');

function clearDb (done) {
  async.parallel([
    function (cb) {
      User.collection.remove(cb);
    },
    function (cb) {
      Item.collection.remove(cb);
    }
  ], done);
}

describe('budgetApp', function () {

  before(clearDb);

  describe('GET /', function () {
    it('Should create a user', function (done) {
      agent.get('/')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /newUser', function () {
    it('Should create a new user', function (done) {
      var params = qs.stringify({
        name: "test",
        pass: "test",
        email: "test"
      });

      agent.get('/newUser?' + params)
        .expect(200)
        .expect("Success! created account for test")
        .end(done);
    });

    it('Verifies a new user was created', function (done) {
      User.findOne({ email: "test" }, function (err, result) {
        if (err) return done(err);
        if (!result) return done(new Error('User not created'));
        user = result;
        done();
      });
    });
  });

  describe('GET /login', function () {
    it('Should return a session token', function (done) {
      var params = qs.stringify({
        name: "test",
        pass: "test"
      });

      agent.get('/login?' + params)
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .end(function (err, res) {
          if (err) return done(err);
          try {
            var data = JSON.parse(res.text);
            assert(data.sessionid, "sessionid not returned");
            session = data.sessionid;
            done(); 
          } catch (e) {
            done(e);
          }
        });
    });
  });

  describe('GET /changePass', function () {
    it('Should change the users password', function (done) {
      var params = qs.stringify({
        name: "test",
        oldPass: "test",
        newPass: "test1",
        sess: session
      });

      agent.get('/changePass?' + params)
        .expect(200)
        .end(function (err, res) {
          if (err)  return done(err); 

          User.findOne({ name: "test" }, function (err, result) {
            if (err) return done(err);
            assert(result, "Test user lost in the database");
            assert(result.authenticate("test1"), "Password not changed");
            done();
          });
        });
    });
  });

  describe('GET /changeEmail', function () {
    it('Should change the users email', function (done) {
      var params = qs.stringify({
        name: "test",
        email: 'updatedEmail',
        sess: session
      });

      agent.get('/changeEmail?' + params)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          User.findOne({ name: "test" }, function (err, result) {
            if (err) return done(err);
            assert(result, "Test user lost in the database");
            assert(result.email = 'updatedEmail', "Email not changed");
            done();
          });
        });
    });
  });

  describe('GET /addItem', function () {
    it("should add an item associated with the test user", function (done) {

      var params = qs.stringify(extend(fixtures.items[0], {
        sess: session,
      }));

      agent.get('/addItem?' + params)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          
          Item.findOne({ itemid: '1234abcd' }, function (err, item) {
            if (err) return done(err);
            if (!item) return done(new Error('Item not found in database'));
            done();
          });
        });
    });
  });

  describe('GET /deleteItem', function () {
    it('should remove the sample item', function (done) {

      var params = qs.stringify({
        name: "test",
        sess: session,
        year: 2015,
        month: 11,
        day: 11,
        itemid: '1234abcd'
      });

      agent.get('/deleteItem?' + params)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          Item.findOne({ itemid: '1234abcd' }, function (err, item) {
            if (err) return done(err);
            if (item) return done(new Error('Item remains in database'));
            done();
          });
        });
    });
  });

  describe('GET /getInit', function () {
    
    before(function (done) {
      async.parallel([
        function (cb) {
          async.each(fixtures.items, function (item, nextItem) {
            Item.create(extend(item, { owner: user }), nextItem);
          }, cb);
        },
        function (cb) {
          User.findOneAndUpdate({ name: 'test' }, {
            categories: fixtures.categories
          }, cb);
        }
      ], done);
    });
    
    it('Should return users items for three months, categories, and date info', function (done) {
      var params = {
        name: 'test',
        sess: session
      };

      agent.get('/getInit?' + qs.stringify(params))
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.ok(res.body.items, 'No items');
          assert.ok(res.body.categories, 'No categories');
          assert.ok(res.body.date, 'No date info');
          assert.equal(res.body.items.length, 3, 'Items wrong length ' + res.body.items.length);
          assert.equal(res.body.categories.length, 3, 'Categories wrong length '+ res.body.categories.length);
          done();
        });
    });
  });

  describe('GET /getMonth', function () {
    it('Should return items only in a certain month range', function (done) {
      var params = {
        name: 'test',
        sess: session,
        year: moment().year(),
        month: moment().month()
      };

      agent.get('/getInit?' + qs.stringify(params))
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.ok(res.body.items, 'No items');
          assert.equal(res.body.items.length, 3, 'Items wrong length ' + res.body.items.length);
          done();
        });
    });
  });

  describe('GET /logout', function () {
    it('Should log out the user and remove their session', function (done) {
      agent.get('/logout?name=test')
        .expect(200)
        .end(done);
    });

    it('Should verify session has ended by failing', function (done) {
      agent.get('/addCategory?name=test&cat=test&sess=' + session)
        .expect(403)
        .expect(/Not Authorized/)
        .end(done);
    });
  });

  after(clearDb);
});