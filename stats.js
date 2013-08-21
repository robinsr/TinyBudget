var databaseUrl = "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , async = require('async');

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