var databaseUrl = "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , async = require('async')
  , redis = require('redis')
  , client = redis.createClient();

var go = (function(cb){
	client.keys("user:*",function(err,result){
		async.each(result,function(user,callback){
			client.get(user,function(err,userData){
				var parsed = JSON.parse(userData);
				db.users.insert(parsed);

				client.keys("items:"+parsed.name+"*",function(err,itemMonths){
					async.each(itemMonths,function(thisMonth){
						client.smembers(thisMonth,function(err,month){
							var parsedi = JSON.parse(month);

							async.each(parsedi,function(item){
								db.items.insert({
									owner: userDate.name,
									day: item.dat,
									month: item.month,
									year: item.month,
									query_short: item.year + obj.month,
								    cat: item.cat,
								    flagged: item.flagged ? item.flagged : false,
								    comment: item.comment ? item.comment : '',
								    amount: item.amount,
								    desc: item.desc,
								    itemid: item.itemid
								})
							})
						})
					})
				})
				callback(null)
			})
		},
		function(err){
			cb()
		})
	})
})();
