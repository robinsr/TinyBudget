var getInit = (function(){
    return {
                // after logging in, this gets the last 3 month of data from the server, adds the categories and items
        // to their respective arrays. triggers the load status to '2' so the rest of the view will appear and enables 
        // form fiends so the user can input items
        main : function () {
            //console.log('main called');
            tinybudget.viewmodel.modalStatus("");
            tinybudgetutils.issue('getInit', [
                ['name', tinybudget.viewmodel.user.name],
                ['sess', tinybudget.viewmodel.user.sess]
            ], null, function (err, stat, datai) {
                if (err) {
                    //console.log('error get Init')
                } else {
                    datai = JSON.parse(datai);
                    
                        // set the date with info from server
                    tinybudget.viewmodel.date = JSON.parse(JSON.stringify(datai.date));
                    tinybudget.viewmodel.currentyear(tinybudget.viewmodel.date.year);
                    tinybudget.viewmodel.currentmonth(tinybudget.viewmodel.date.month);
                    tinybudget.viewmodel.user.categories = JSON.parse(JSON.stringify(datai.categories));
                    
                    if (tinybudget.viewmodel.user.categories.length == 0) {
                        tinybudget.viewmodel.modalStatus("tour");
                    } else {
                        ko.mapping.fromJS(datai.categories,tinybudget.viewmodel.userCategories)
                    }
                    
                    tinybudget.viewmodel.loadstatus(2);
                    ko.mapping.fromJS(datai.items, mapping, tinybudget.viewmodel.userItems)                    
                    var gitInitMonths = [
                        tinybudget.viewmodel.date.month+","+tinybudget.viewmodel.date.year,
                        tinybudget.viewmodel.date.one_month_back+","+tinybudget.viewmodel.date.one_month_back_yr,
                        tinybudget.viewmodel.date.two_month_back+","+tinybudget.viewmodel.date.two_month_back_yr
                    ];
                       
                    for (i=0; i<gitInitMonths.length;i++){
                        tinybudget.viewmodel.loadedMonths.push(gitInitMonths[i]);
                    }
                }
            });
        }
    }
})();