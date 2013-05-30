var getInit = (function(){
    return {
                // after logging in, this gets the last 3 month of data from the server, adds the categories and items
        // to their respective arrays. triggers the load status to '2' so the rest of the view will appear and enables 
        // form fiends so the user can input items
        main : function () {
            tinybudget.viewmodel.modalStatus("");
            tinybudgetutils.issue('getInit', [
                ['name', tinybudget.viewmodel.user.name],
                ['sess', tinybudget.viewmodel.user.sess]
            ], null, function (err, stat, datai) {
                if (err) {
                    //console.log('error get Init')
                } else {
                    datai = JSON.parse(datai);
                    //console.log(datai)
                    tinybudget.viewmodel.user.categories = JSON.parse(JSON.stringify(datai.categories));
                    
                    if (tinybudget.viewmodel.user.categories.length == 0) {
                        tinybudget.viewmodel.modalStatus("tour");
                    } else {
                        for (var i = 0; i < tinybudget.viewmodel.user.categories.length; i++) {
                            tinybudget.viewmodel.userCategories.push(tinybudget.viewmodel.user.categories[i]);
                        };
                    }
                    
                    itemCount = datai.items.length;
                    //console.log(datai.items);
                    if (itemCount > 2) {
                            // The following is not in a for loop because the UI will not update 
                            // the progress bar until the for loop completes
                        var count = 0
                        
                        function run(){
                            //console.log(count,datai.items.length - 2);
                            var progress = Math.floor((count/datai.items.length)*100);
                            if (progress % 10 == 0){
                                tinybudget.viewmodel.loadBarProgress(progress);
                            }
                            tinybudget.viewmodel.userItems.push(new rowitem(true, datai.items[count].desc, datai.items[count].amt, datai.items[count].year + "/" + datai.items[count].month + "/" + datai.items[count].day, datai.items[count].cat, datai.items[count].itemid, (datai.items[count].isflagged=="true"), datai.items[count].comment));
                            
                                    // length minus 2 is important! it allows the regular subscribed function to render the high chart
                                    // on the last item. if it was minus 1 then the subscribed funtion wouldn't run since all items are loaded.
                                    // One more item remains to be loaded therefore we dont return the block right here.
                            if (count == datai.items.length - 2) {
                                console.log('loadstatus2 at run');
                                tinybudget.viewmodel.loadstatus(2);
                            }
                            
                            count++;
                            
                            if (count >= datai.items.length){
                                return;
                            } else {
                                setTimeout(run,0);
                            }
                        }; 
                        run();
                        
                    } else if (itemCount > 1){
                        tinybudget.viewmodel.loadstatus(2);
                        tinybudget.viewmodel.userItems.push(new rowitem(true, datai.items[0].desc, datai.items[0].amt, datai.items[0].year + "/" + datai.items[0].month + "/" + datai.items[0].day, datai.items[0].cat, datai.items[0].itemid, (datai.items[0].isflagged=="true"), datai.items[0].comment));
                    } else {
                        tinybudget.viewmodel.loadstatus(2);
                    }
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