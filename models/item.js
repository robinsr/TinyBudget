var mongoose = require('mongoose');
var moment = require('moment');
var util = require('util');

var getAmt = function (val) {
  return (val / 100).toFixed(2);
}

var setAmt = function (val) {
  return parseInt(val * 100);
}

var itemSchema = new mongoose.Schema({
  cat: String,
  isflagged: Boolean,
  comment: String,
  amt: { type: Number, get: getAmt, set: setAmt },
  desc: String,
  itemid: String,
  day: Number,
  month: Number,
  date: Date,
  year: Number,
  owner: {type : mongoose.Schema.ObjectId, ref : 'User'}
});

itemSchema.pre('save', function (next) {
  this.date = moment(util.format("%d-%d-%d", this.month, this.day, this.year), 'MM-DD-YYYY').toISOString();
  next();
});

itemSchema.virtual('query_short').get(function () {
  return (parseInt(this.year * 100)) + parseInt(this.month);
})

itemSchema.statics = {
  load: function (id, next) {
    this.findOne({ itemid: id }).exec(next);
  }
}


mongoose.model('Item', itemSchema);