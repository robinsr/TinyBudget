var moment = require('moment');

module.exports.items = [
  {
    name: "test",
    year: moment().year(),
    month: moment().month(),
    day: moment().date(),
    amt: 12.34,
    cat: 'bills',
    desc: 'An item description',
    itemid: '1234abcd'
  },
  {
    name: "test",
    year: moment().year(),
    month: moment().month(),
    day: moment().date(),
    amt: 12.34,
    cat: 'rent',
    desc: 'An item description',
    itemid: '5678efgh'
  },
  {
    name: "test",
    year: moment().year(),
    month: moment().month(),
    day: moment().date(),
    amt: 12.34,
    cat: 'shoes',
    desc: 'An item description',
    itemid: '9012lmnop'
  },
  {
    name: "test",
    year: moment().year(),
    month: moment().subtract(4, 'month').month(),
    day: moment().date(),
    amt: 12.34,
    cat: 'shoes',
    desc: 'An item description',
    itemid: '9012lmnop'
  }
];

module.exports.categories = ['bills', 'rent', 'shoes'];