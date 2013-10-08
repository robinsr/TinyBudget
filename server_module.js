var server = (function(){
    return {
        fetchMonth: function(month,year,cb){
            tinybudget.viewmodel.loadstatus(1);
            tinybudgetutils.issue('getMonth', [
            ['name',tinybudget.viewmodel.user.name],
            ['sess',tinybudget.viewmodel.user.sess],
            ['year',year],
            ['month',month]
            ], null, function(err,stat,message){
                
            if (err || stat == 400) {
                //console.log('error getMonth')
            } else {
                var datai = JSON.parse(message);            
                var newItems = ko.mapping.fromJS([])
                ko.mapping.fromJS(datai.items, mapping,newItems);
                console.log(newItems());
                ko.utils.arrayPushAll(tinybudget.viewmodel.userItems, newItems());
                tinybudget.viewmodel.userItems.valueHasMutated();
                tinybudget.viewmodel.renderChart();
                tinybudget.viewmodel.loadstatus(2);
                tinybudget.viewmodel.loadedMonths.push(month+","+year);
            }
            });
        },
        addItemToServer:function(item){
            //console.log('server.addItemToServer; success is false, 2 or more, false', tinybudget.viewmodel.sorting, tinybudget.viewmodel.loadstatus(), item.loadedFromServer);
            if (tinybudget.viewmodel.sorting === false) {
                if (tinybudget.viewmodel.loadstatus() > 1) {
                    if (item.loadedFromServer === false) {
                        tinybudgetutils.issue('addItem', [
                            ['name', tinybudget.viewmodel.user.name],
                            ['sess', tinybudget.viewmodel.user.sess],
                            ['cat', encodeURIComponent(item.cat())],
                            ['day', encodeURIComponent(item.day())],
                            ['month', encodeURIComponent(item.month())],
                            ['year', encodeURIComponent(item.year())],
                            ['amt', encodeURIComponent(item.amt())],
                            ['desc', encodeURIComponent(item.desc())],
                            ['itemid', encodeURIComponent(item.itemid)],
                            ['isflagged', encodeURIComponent(item.isflagged())],
                            ['comment', encodeURIComponent(item.comment())]
                        ], null, function (err, stat, text) {
                            if (stat == 400){
                                tinybudget.viewmodel.expiredSession();
                            } else if (stat == 500 || stat == 502){
                                tinybudget.viewmodel.serverError();
                            } else {
                                return;
                            }
                        });
                    }
                }
            } else {
                //console.log('tinybudget.viewmodel.sorting is ' + tinybudget.viewmodel.sorting);
            }
        },
        removeItemFromServer:function(item){
            if (tinybudget.viewmodel.sorting === false) {
                if (tinybudget.viewmodel.loadstatus() > 1) {
                    tinybudgetutils.issue('deleteItem', [
                        ['name', tinybudget.viewmodel.user.name],
                        ['sess', tinybudget.viewmodel.user.sess],
                        ['day', encodeURIComponent(item.day())],
                        ['month', encodeURIComponent(item.month())],
                        ['year', encodeURIComponent(item.year())],
                        ['itemid', encodeURIComponent(item.itemid)]
                    ], null, function (err, stat, text) {
                        if (stat == 400){
                            tinybudget.viewmodel.expiredSession();
                        } else if (stat == 500 || stat == 502){
                            tinybudget.viewmodel.serverError();
                        } else {
                            return;
                        }
                    });
                }
            } else {
                //console.log('self.sorting is ' + self.sorting);
            }
        },
        addCategoryToServer:function(item){
            if (tinybudget.viewmodel.loadstatus() > 1) {
                tinybudgetutils.issue('addCategory', [
                    ['name', tinybudget.viewmodel.user.name],
                    ['sess', tinybudget.viewmodel.user.sess],
                    ['cat', encodeURIComponent(item)]
                ], null, function (err, stat, text) {
                    if (stat == 400){
                        tinybudget.viewmodel.expiredSession();
                    } else if (stat == 500 || stat == 502){
                        tinybudget.viewmodel.serverError();
                    } else {
                        return;
                    }
                });
            }
        },
        removeCategoryFromServer:function(item){
            if (tinybudget.viewmodel.loadstatus() > 1) {
                tinybudgetutils.issue('deleteCategory', [
                    ['name', tinybudget.viewmodel.user.name],
                    ['sess', tinybudget.viewmodel.user.sess],
                    ['cat', encodeURIComponent(item)]
                ], null, function (err, stat, text) {
                    if (stat == 400){
                        tinybudget.viewmodel.expiredSession();
                    } else if (stat == 500 || stat == 502){
                        tinybudget.viewmodel.serverError();
                    } else {
                        return;
                    }
                });
            }
        }
    }    
    
})();
