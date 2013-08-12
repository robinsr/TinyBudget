var databaseUrl = "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , async = require('async')
  , redis = require('redis')
  , client = redis.createClient();

(function(){
	async.series([
		function(callback){
			client.keys("user:*",function(err,allUsers){
				async.eachSeries(allUsers,function(user,callbacki){
					console.log(user);
					client.get(user,function(err,userData){
						var parsed = JSON.parse(userData);
						console.log('user: '+parsed.name)
						db.users.insert(parsed);
						callbacki()
					})
				},callback(null))
			})
		},
		function(callback){
			client.keys("items:*",function(err,itemMonths){
				async.eachSeries(itemMonths,function(thisMonth,callbacki){
					console.log(thisMonth);
					client.smembers(thisMonth,function(err,month){
						var parsedi = JSON.parse(month);
						console.log(parsedi);

						async.eachSeries(parsedi,function(item,callbackii){
							console.log('item: '+parsedi.desc)
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
							},function(){
								callbackii(null);
							})
						},function(){
							callbacki(null);
						})
					})
				},callback(null))
			})
		}
	],function(){
		console.log('script completed')
		process.exit();
	})
})();


