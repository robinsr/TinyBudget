
process.env.MONGOLAB_URI = 'mongodb://localhost/noobjs_test';

var app = require(__dirname + '/../budgetapp');
var supertest = require('supertest');
var agent = supertest.agent(app);
var assert = require('assert');
var session;

var mongoose = require('mongoose');
var User = mongoose.model('User');

describe('budgetApp', function () {

  before(function (done) {
    User.collection.remove(done);
  });

  describe('GET /', function () {
    it('Should create a user', function (done) {
      agent.get('/')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /newUser', function () {
    it('Should create a new user', function (done) {
      agent.get('/newUser?name=test&pass=test&email=test')
        .expect(200)
        .expect("Success! created account for test")
        .end(done);
    });

    it('Verifies a new user was created', function (done) {
      User.findOne({ email: "test" }, function (err, result) {
        if (err) return done(err);
        if (!result) return done(new Error('User not created'));
        done();
      });
    });
  });

  describe('GET /login', function () {
    it('Should return a session token', function (done) {
      agent.get('/login?name=test&pass=test')
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
      agent.get('/changePass?name=test&oldPass=test&newPass=test1&sess=' + session)
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
      var updatedEmail = 'updatedEmail';
      agent.get('/changeEmail?name=test&email=' + updatedEmail + '&sess=' + session)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          User.findOne({ name: "test" }, function (err, result) {
            if (err) return done(err);
            assert(result, "Test user lost in the database");
            assert(result.email = updatedEmail, "Email not changed");
            done();
          });
        });
    });
  });

  describe('GET /changeEmail', function () {
    // body...
  })

  describe('GET /logout', function () {
    it('Should log out the user and remove their session', function (done) {
      agent.get('/logout?name=test')
        .expect(200)
        .end(done);
    });

    it('Should verify session has ended by failing', function (done) {
      agent.get('/addCategory?name=test&cat=test&sess=' + session)
        .expect(400)
        .expect(/failed auth/)
        .end(done);
    });
  });

  after(function (done) {
    User.collection.remove(done);
  });
});