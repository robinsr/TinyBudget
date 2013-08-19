var databaseUrl = "tinybudget"
  , collections = ["users", "items","sessions"]
  , db = require("mongojs").connect(databaseUrl, collections)
  , async = require('async')
  , redis = require('redis')
  , client = redis.createClient();

(function(){
	async.series([
		function(callback){
			client.keys("cat:*",function(err,allUsers){

				async.eachSeries(allUsers,function(user,callbacki){
					var owner = user.replace(/[a-z]*:/,'');
					console.log(owner);
					client.smembers(user,function(err,userData){
						async.eachSeries(userData,function(cat){
							console.log(cat);
							db.users.update({user:owner},{$push: {categories: cat}});
							callbacki()
						})
					})
				},function(){callback(null)})
			})
		},
	],function(){
		console.log('script completed')
		process.exit();
	})
})();


