var databaseUrl = "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , async = require('async')
  , moment = require('moment');


  // not functional yet - compares change in spending over 2 months
module.exports.compareMonths = function(user,year,month1,month2,cb){

	var results_month_1, results_month_2

	async.parallel([function(callback){
		db.items.group({
	    key:{cat:true},
	    initial:{items:0,amt:0},
	    reduce: function(doc,agg){
	     	agg.items += 1;
	        agg.amt += parseFloat(doc.amt);
	    },
	    cond:{owner:user,year:year,month:month1}
		},function(err,results_month_1){
			if (err) {
				callback(1)
			} else {
				callback(null)
			}
		});	
	},function(callback){
		db.items.group({
	    key:{cat:true},
	    initial:{items:0,amt:0},
	    reduce: function(doc,agg){
	     	agg.items += 1;
	        agg.amt += parseFloat(doc.amt);
	    },
	    cond:{owner:user,year:year,month:month2}
		},function(err,results_month_2){
			if (err) {
				callback(1)
			} else {
				callback(null)
			}
		});	
	}],
	function(err,results){
		if (err){

		} else {
			async.each()
		}
	})
}

	// groups by category - gets total items, total amount, average amount, and mean day (called 'likely_day')
module.exports.categoryTotals = function(obj,cb){
	var conditions;
	if (obj.lower && obj.upper) {
		conditions = {owner: obj.name, query_short: {$gte: parseInt(obj.lower), $lte: parseInt(obj.upper)}}
	} else if (obj.month) {
		conditions = {owner:obj.name,year:parseInt(obj.year),month:parseInt(obj.month)};
	} else if (obj.year) {
		conditions = {owner:obj.name,year:parseInt(obj.year)};
	} else {
		conditions = {owner:obj.name};
	}
	console.log(conditions);
	db.items.group({
	    key:{cat:true},
	    cond:conditions,
	    initial:{items:0,amt:0,likely_day:0,avg:0},
	    reduce: function(doc,agg){
	     	agg.items += 1;
	        agg.amt += parseInt(doc.amt);
	        agg.likely_day += parseInt(doc.day);
	    },
	    finalize: function(agg){
	    	agg.avg = parseFloat((agg.amt/100)/agg.items).toFixed(2);
	    	agg.amt = (agg.amt/100).toFixed(2);
	    	agg.likely_day = parseInt(agg.likely_day/agg.items);
	    }
	},function(err,result){
		if (err){
			cb(1)
		} else {
			cb(null,result);
		}
	});
}

	// groups by day - gets items, item total, payday total - not useful outside of a one month range
module.exports.incomePerDay = function(obj,cb){
	var conditions;
	
	if (obj.lower && obj.upper) {
		conditions = {owner: obj.name, query_short: {$gte: parseInt(obj.lower), $lte: parseInt(obj.upper)}}
	} else if (obj.month) {
		conditions = {owner:obj.name,year:parseInt(obj.year),month:parseInt(obj.month)};
	} else if (obj.year) {
		conditions = {owner:obj.name,year:parseInt(obj.year)};
	} else {
		conditions = {owner:obj.name};
	}
	console.log(conditions);
	db.items.group({
	    key:{day:true},
	    cond:conditions,
	    initial:{items:0,cost:0,pay:0,balance:0},
	    reduce: function(doc,agg){
	    	var monies = parseInt(doc.amt);
	    	if (doc.cat != 'payday'){
	    		agg.items += 1;
	    		agg.cost += monies;
	    		agg.balance -= monies;
	    	} else {
	    		agg.pay += monies;
	    		agg.balance += monies;
	    	}
	        
	    }
	},function(err,mongoResult){
		if (err){
			cb(1)
		} else {
			var daycount = 0;
			var days;
			obj.month ? days = moment(obj.year+"-"+obj.month, "YYYY-MM").daysInMonth() : days = 365;
			var total = 0;
			var paydays = 0;
			var expenses = 0;

			mongoResult.forEach(function(item){
				total += item.balance;
				paydays += item.pay;
				expenses += item.cost;
			})
			var result = {
				data: mongoResult,
				calculations: {
					total: total,
					paydays: paydays,
					expenses: expenses,
					payPerDay: parseInt(paydays / days),
					expensePerDay: parseInt(expenses / days),
					netPerDay: parseInt(total / days)
				}
			}
			cb(null,result);
		}
	});
}

	// groups by 
module.exports.overallIncome = function(obj,cb){
	var conditions;
	var a = moment([parseInt(obj.year),parseInt(obj.month),])
	if (obj.lower && obj.upper) {
		conditions = {owner: obj.name, query_short: {$gte: parseInt(obj.lower), $lte: parseInt(obj.upper)}}
	} else if (obj.month) {
		conditions = {owner:obj.name,year:parseInt(obj.year),month:parseInt(obj.month)};
	} else if (obj.year) {
		conditions = {owner:obj.name,year:parseInt(obj.year)};
	} else {
		conditions = {owner:obj.name};
	}
	console.log(conditions);
	db.items.group({
	    key:{day:true},
	    cond:conditions,
	    initial:{items:0,cost:0,pay:0},
	    reduce: function(doc,agg){
	    	if (doc.cat != 'payday'){
	    		agg.items += 1;
	    		agg.cost += parseInt(doc.amt);
	    	} else {
	    		agg.pay += parseInt(doc.amt);
	    	}
	        
	    }
	},function(err,result){
		if (err){
			cb(1)
		} else {
			cb(null,result);
		}
	});
}