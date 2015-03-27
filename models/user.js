var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
    email: { type: String, required:  true, unique: true },
    name: { type: String, required:  true },
    hashed_password: String,
    salt: String,
    categories: [String]
});

userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() { return this._password });

userSchema.methods = {
  makeSalt: function () {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  }
}

userSchema.statics = {
 load: function (options, cb) {
    options.select = options.select || 'name email';
    this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
}

mongoose.model('User', userSchema);