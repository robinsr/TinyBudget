var mongoose = require('mongoose');


var itemSchema = new mongoose.Schema({
  cat: String,
  isflagged: Boolean,
  comment: String,
  amt: Number,
  desc: String,
  itemid: {type : Schema.ObjectId },
  day: Number,
  month: Number,
  year: Number,
  owner: {type : Schema.ObjectId, ref : 'User'}
});

itemSchema.virtual('query_short').get(function () {
  return (parseInt(this.year * 100)) + parseInt(this.month);
})


mongoose.model('Item', itemSchema);