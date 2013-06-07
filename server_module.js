var server = (function(){
    return {
        fetchMonth: function(month,year){
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
                //console.log(datai)
                
                if (datai.items && datai.items.length > 0) {
                    for (var i = 0; i < datai.items.length; i++) {
                        var flg = (datai.items[i].isflagged == 'true');
                        tinybudget.viewmodel.userItems.push(new rowitem(true, datai.items[i].desc, datai.items[i].amt, datai.items[i].year + "/" + datai.items[i].month + "/" + datai.items[i].day, datai.items[i].cat, datai.items[i].itemid, flg, datai.items[i].comment));
                    }
                } else {
                    // no items in this month
                }
                    
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
                            ['cat', item.cat],
                            ['day', item.day()],
                            ['month', item.month()],
                            ['year', item.year()],
                            ['amt', item.amt],
                            ['desc', item.desc],
                            ['itemid', item.itemid],
                            ['isflagged', item.isflagged()],
                            ['comment', item.comment()]
                        ], null, function (err, stat, text) {
                            //console.log(err, stat, text)
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
                        ['day', item.day()],
                        ['month', item.month()],
                        ['year', item.year()],
                        ['itemid', item.itemid]
                    ], null, function (err, stat, text) {
                        //console.log(err, stat, text)
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
                    ['cat', item]
                ], null, function (err, stat, text) {
                    //console.log(err, stat, text)
                });
            }
        },
        removeCategoryFromServer:function(item){
            if (tinybudget.viewmodel.loadstatus() > 1) {
                tinybudgetutils.issue('deleteCategory', [
                    ['name', tinybudget.viewmodel.user.name],
                    ['sess', tinybudget.viewmodel.user.sess],
                    ['cat', item]
                ], null, function (err, stat, text) {
                    //console.log(err, stat, text)
                });
            }
        }
    }    
    
})();