// ==============  KNOCKOUT VIEWMODEL ================

    // the main viewmodel for this app
function AppViewModel() {
    var self = this; 
    var setDate = function(){
        var d = new Date();
        var e = new Date();
        var f = new Date();
        with(e){
            setMonth(getMonth()-1);
        }
        with(f){
            setMonth(getMonth()-2);
        }
        return todays_date = {
            year: d.getFullYear(),
            day: d.getDate(),
            month: d.getMonth()+1,
            one_month_back: e.getMonth()+1,
            one_month_back_yr: e.getFullYear(),
            two_month_back: f.getMonth()+1,
            two_month_back_yr: f.getFullYear()
        }
        //console.log(util.inspect(todays_date))
    }
    self.date = setDate();
    
    self.loadedMonths = ko.observableArray([]);  // loadstatus: 0: logged out, 1: logged in no data, 2: logged in with data, 3: loading additional data
    self.loadstatus = ko.observable(0);
    self.currentyear = ko.observable(self.date.year);
    self.currentmonth = ko.observable(self.date.month);
    self.signuperror = ko.observable(0);
    self.inputFeedback = ko.observable('');
    self.expenseOrPaydayActive = ko.observable("expense");
	self.userItems = ko.observableArray([]);
    self.desc = ko.observable("");
    self.amt = ko.observable("");
    self.input_date = ko.observable("");
    self.cat = ko.observable(""); 
    self.input_error = ko.observable("");
	self.sorting = false;
	self.allCategoriesTotal = ko.observable();
	self.paydayTotal = ko.observable();
	self.showUnspent = ko.observable(false);
	self.unusedCategories = ko.observableArray([]);
	self.categoryHighlight = ko.observable();
	self.userCategories = ko.observableArray([]);
	self.userCategoriesTotals = ko.observableArray([]);
    self.categoryFeedback = ko.observable();
    self.categoryValidateState = ko.observable();
    self.addCatValue = ko.observable("");
	self.username = ko.observable();
    self.userEmail = ko.observable();
    self.changePassError = ko.observableArray([]);
    self.oldPass = ko.observable("");
    self.newPass = ko.observable("");
	self.changeEmailError = ko.observableArray([]);
	self.loadBarProgress = ko.observable(0);
	self.uname = ko.observable('');
    self.upass = ko.observable('');
	self.signup_uname = ko.observable("");
    self.signup_pass = ko.observable("");
    self.signup_email = ko.observable("");
	self.modalStatus = ko.observable("");
	self.onTour = ko.observable(0);// 0 not onTour; 1 User Tour; 2 Tech Tour    
    
    self.loadedMonths.subscribe(function(array){
        //console.log('added to loaded months '+array[array.length-1]);
    });
    
    self.incrementMonth = function(){
        self.categoryHighlight(null);
        if (self.currentmonth() == 12){
            self.currentmonth(1)
            self.incrementYear();
        } else {
            self.currentmonth(self.currentmonth() + 1)
        }
        var monthCheck = self.currentmonth()+","+self.currentyear();
        var match = ko.utils.arrayFirst(self.loadedMonths(), function(piece){
            return (monthCheck == piece)
        });
        if (!match) {
            //console.log('need data for: '+monthCheck)
            server.fetchMonth(self.currentmonth(),self.currentyear())
        }
    }
    
    self.decrementMonth = function(){
        self.categoryHighlight(null);
        if (self.currentmonth() == 1){
            self.currentmonth(12)
            self.decrementYear();
        } else {
            self.currentmonth(self.currentmonth() - 1)
        }
        var monthCheck = self.currentmonth()+","+self.currentyear();
        var match = ko.utils.arrayFirst(self.loadedMonths(), function(piece){
            return (monthCheck == piece)
        });
        if (!match) {
            //console.log('need data for: '+monthCheck)
            server.fetchMonth(self.currentmonth(),self.currentyear())
        }
    }
    
    self.incrementYear = function(){
        self.currentyear(self.currentyear() + 1)
    }
    
    self.decrementYear = function(){
        self.currentyear(self.currentyear() - 1)
    }
    
    self.friendlyyear = ko.computed(function () {
        return self.currentyear().toString();
    });
    self.friendlymonth = ko.computed(function () {
        return monthName[self.currentmonth().toString()];
    });
    self.user = {};

    self.switchExpensePayday = function(){
        if (self.expenseOrPaydayActive() == "expense"){
            self.expenseOrPaydayActive("payday");
        } else {
            self.expenseOrPaydayActive("expense");
        }
    }


        // adds an item to userItems adter the input form is submitted. obviously needs validation
    self.addItem = function () {
        self.input_error("");
            // validate here please 
            // there should be a description
        if (self.desc().length > 0){
            self.input_error("");
                // 32 character limit
            if (self.desc().length <= 32) {
                if (self.amt().length > 0) {
                    if (self.amt().length <= 8) {
                        // remove all non digits
                        var re = /^-?\$?[0-9]*\.?([0-9]{2})?$/
                        var match = re.test(self.amt())
                        //console.log('tested and ' + match)
                        if (match) {
                                // the input should parse to a decimal, otherwise dont add it
                            var parsed_input = parseFloat(self.amt()).toFixed(2);
                            if (!isNaN(parsed_input)) {
                                self.input_error("");
                                // a correct date is MM/DD/YYYY. split at '/' to get 3 member array
                                //console.log(self.input_date());
                                var date = self.input_date().split("/");
                                // check to see if there are 3 members
                                if ((date[0] && date[1] && date[2])) {
                                    for (var i = 0; i < date.length; i++) {
                                        date[i] = parseInt(date[i]);
                                        //console.log('parsing ' + date[i])
                                    };
                                        // check is day, month, and year are acceptable
                                    if ((0 < date[0]) && (date[0] < 13) && (!isNaN(date[0]))) {
                                        if ((0 < date[1]) && (date[1] < 32) && (!isNaN(date[1]))) {
                                            if ((2011 < date[2]) && (date[2] < 2015) && (!isNaN(date[2]))) {
                                                self.input_error("");
                                                var cat = self.expenseOrPaydayActive() == 'payday' ? 'payday' : self.cat();
                                                self.userItems.push(new rowitem(false, self.desc(), parsed_input, self.input_date(), cat));
                                                self.desc("");
                                                self.amt("");
                                                self.input_date("");
                                                document.forms.input_form.desc.focus();
                                                self.inputFeedback('Item Added Successfully')
                                                setTimeout(function () {
                                                    self.inputFeedback('');
                                                }, 5000);
                                            } else {
                                                self.validateFail('date')
                                            }
                                        } else {
                                            self.validateFail('date')
                                        }
                                    } else {
                                        self.validateFail('date')
                                    }
                                } else {
                                    self.validateFail('date')
                                }
                            } else {
                                self.validateFail('amt')
                            }
                        } else {
                            self.validateFail('amt')
                        }
                    } else {
                        self.validateFail('amt_long')
                    }
                } else {
                    self.validateFail('amt')
                }
            } else {
                self.validateFail('desc_long')
            }
        } else {
            self.validateFail('desc')
        }
        

    }
    
        // displays error messages
    self.validateFail = function(type){
        //console.log('validate fail' ,type);
        switch (type){
            case 'desc':
            case 'desc_long':
                self.input_error("desc");
                break;
            case 'amt':
            case 'amt_long':
                self.input_error("amt");
                break;
            case 'date':
                self.input_error("date");
                break;      
        }
        var message = {
            'desc': 'Your item needs a description',
            'amt': 'Enter valid dollar amount like 12.34. No need for a "$"',
            'desc_long': 'Descriptions limited to 32 characters',
            'amt_long': 'Amounts limited to 8 digits (also, wow that\'s expensive!)',
            'date': 'Date format is MM/DD/YYYY'
        } 
        self.inputFeedback(message[type]);
    }

        // removes item from knockout observable array userItems
    self.removeItem = function (item) {
        self.userItems.remove(item)
    };
    
        // subscries to changes in userItems array. Uses a custom function to detect whether an item
        // was added or removed from the array and then provices an add and remove callback
    self.userItems.subscribeArrayChanged(
        function(item){server.addItemToServer(item)}, 
        function(item){server.removeItemFromServer(item)}
    );
    
        // changes the table row CSS class based on a boolean value associated with the item
    self.flagItem = function(item){
        
            // the user has click to flag this item, we need to find it in the userItems array
        var match = ko.utils.arrayFirst(self.userItems(), function(array_piece){
            return array_piece.itemid === item.itemid
        });
        
            // if there is a match, and there pretty well should be, toggle the value of 'isflagged'
        if (match){
            if (match.isflagged() === true){
                match.isflagged(false)
            }else{
                match.isflagged(true);
            }
                // update the server
            item.loadedFromServer = false;
            server.addItemToServer(item);
        }
    }
    
        // deploys a popover to add comments to an item
    self.commentItem = function(item,event){
        var data;
        
            // generates a unique id for the popover based on the item
        var new_id = item.itemid+item.year()
        
            // if that id is already on the page, that means the popover is up and is being closed
        if (data = document.getElementById(new_id)){  
            
                // search userItems for the item in question
            var match = ko.utils.arrayFirst(self.userItems(), function(array_piece){
            return array_piece.itemid === item.itemid
            });
            
            if (match){
                    
                    // check to see if the comment was actually changed
                if (data.value == match.comment()){
                        
                        // if not, destroy popover, it is initialized each time it is called
                    $(event.target).popover('destroy'); 
                    return
                } else {
                    
                        // if the comment was changed, update the model... 
                    match.comment(data.value);
                    
                        // ...and the server
                    item.loadedFromServer = false;
                    server.addItemToServer(item);
                    
                        // destroy the previously initiallized popover 
                    $(event.target).popover('destroy');   
                }
            }
        } else {
            
                // the popover is not on the page so we generate one adding the unique id and the
                // comment associated with this item
            $(event.target).popover({
                content: '<textarea id="'+new_id+'">'+item.comment()+'</textarea>',
                title: 'Add a comment',
                trigger: 'manual',
                html: true
            })
                // show the popover
            $(event.target).popover('show');
        }
    }



        // an array that replicates userItems except if filters out all the items that are not
        // in the month that the user is viewing
    self.filteredUserItems = ko.computed(function () {
        return ko.utils.arrayFilter(self.userItems(), function (r) {
            return (self.currentyear() == r.year()) && (self.currentmonth() == r.month())
        });
    });

        // function for sorting all items table
    

    self.sortAllItemsTable = function (property) {
        self.sorting = true;
        self.userItems.sort(function (l, r) {
            var l_parse = l[property].toLowerCase(),
                r_parse = r[property].toLowerCase();
            return l_parse == r_parse ? 0 : (l_parse < r_parse ? -1 : 1);
        });
        setTimeout(function () {
            self.sorting = false;
        }, 100);
    }

    self.sortAllItemsTableDay = function () {
        self.sorting = true;
        (function (next) {
            self.userItems.sort(function (l, r) {
                var l_parse = parseInt(l.day()),
                    r_parse = parseInt(r.day());
                return l_parse == r_parse ? 0 : (l_parse < r_parse ? -1 : 1);
            });
            next();
        })(function () { self.sorting = false });
    }

    self.sortAllItemsTableAmt = function () {
        self.sorting = true;
        (function (next) {
            self.userItems.sort(function (l, r) {
                var l_parse = parseInt(l.amt),
                    r_parse = parseInt(r.amt);
                return l_parse == r_parse ? 0 : (l_parse < r_parse ? -1 : 1)
            });
            next();
        })(function () { self.sorting = false });
    }

        // computed to find the difference of the above
    self.difference = ko.computed(function(){
        return Math.round((self.paydayTotal()-self.allCategoriesTotal()) * 100) / 100;
    })

    self.friendlyDifference = ko.computed(function(){
        return self.difference().toString().replace("-","")
    })

    self.renderChart = function(){
        if (is_ie8_or_newer === false){
            $('#highchart').highcharts(pie_chart);
        }
        else {
            pie_chart.plotOptions.pie.animation = false;
            $('#highchart').highcharts(pie_chart);
            //console.log("animation "+pie_chart.plotOptions.pie.animation)
        }
        
    }

    self.checkUnspent = function(next){
        //console.log(self.difference())
        if (self.showUnspent()===true){
            if (self.difference() > 0){
                var dif = parseFloat(self.difference());
                pie_chart.series[0].data.push({name:'Unspent', y:dif,id:'unspentSlice'})
                next(true);
            } else {
                next(false);
            }
        } else {
            for (var i = 0; i < pie_chart.series[0].data.length; i++) {
                if (pie_chart.series[0].data[i].name == 'Unspent'){
                    pie_chart.series[0].data.splice(i,1);
                    next(true);
                    return
                }
            }
            next(false);
        }
        
    }

    self.showUnspent.subscribe(function(){
        self.checkUnspent(function(val){
            if (val){
                self.renderChart();
            }
        });
    });

        // setup an object to temporarily hold the values of each category total
    var temp_totals = {};

        // constructs the userCategoriesTotals based on what month is in view. Each time filteredUserItems
        // changes, the totals associated with each catgory change as well
    self.filteredUserItems.subscribe(function (array) {
        
            // total of all the categories combined. how much the user spent in the month they're viewing
        var total = 0;
        var paydayTotal = 0;
        self.paydayTotal(0);
        self.allCategoriesTotal(0);

        temp_totals = {};
        
            // loop through the array. For each item...
        for (i = 0; i < array.length; i++) {

                // if payday item, add to paydayTotal else add the item to the category's total
            if (array[i].cat.toLowerCase() == 'payday'){
                paydayTotal += parseFloat(array[i].amt);
            } else {
            
                // ...go through every item in userCategories
                for (ii = 0; ii < self.userCategories().length; ii++) {
               
                        // if temp_totals doesn't have the category added yet, add it
                    if (!temp_totals[self.userCategories()[ii]]) {
                        temp_totals[self.userCategories()[ii]] = 0;
                    }
                    
                        // if the category for this item match the category we're looking for, add the items
                        // amount to temp_totals and the total
                    if (array[i].cat == self.userCategories()[ii]) {
                        temp_totals[self.userCategories()[ii]] += parseFloat(array[i].amt);
                        total += parseFloat(array[i].amt);
                    }  
                }
            }
        }
        
            // reset the array which holds the category totals
        self.userCategoriesTotals.removeAll();
        
            // set up a highcharts object for making the pie chart
        pie_chart.series[0].data = [];
        
            // for each category in temp_totals...
        for (var l in temp_totals) {
            var amt = Math.round(temp_totals[l] * 100) / 100;
            
                // ...add it to userCategoriesTotals
            self.userCategoriesTotals.push(new categoryTotal(l, amt));
            
                // ...and to the high chart. keep the pie clean by excluding zero categories
            if (amt !== 0 || name.toLowerCase() == 'payday'){
                pie_chart.series[0].data.push({name:l, y:amt, id:l})
            }
        }
        
                
            // apply the total value found above to our model
        self.allCategoriesTotal(Math.round(total * 100) / 100);
        self.paydayTotal(Math.round(paydayTotal * 100) / 100);

        // display the new pie chart
        if (self.sorting !== true && self.loadstatus() > 1) {
            self.checkUnspent(function(val){
                //console.log('rending chart')
                self.renderChart();
            })
        }
    })

        // filter function to find unused categories    
    self.filteredUserItems.subscribe(function (array) {
        self.unusedCategories.removeAll();
        for (var i = 0; i < array.length; i++) {

            var match = ko.utils.arrayFirst(self.userCategories(), function (category) {
                return array[i].cat == category
            });

            if (!match) {
                var second_match = ko.utils.arrayFirst(self.unusedCategories(), function (unused) {
                    return array[i].cat == unused
                });
                if (!second_match) {
                    self.unusedCategories.push(array[i].cat)
                }
            }
        };
    });


        // holds the array of items that match the name of the category in categoryHighlight
    self.categoryHighlightFilter = ko.computed(function(){
        return ko.utils.arrayFilter(self.userItems(), function (r) {
            return (self.currentyear() == r.year()) && (self.currentmonth() == r.month()) && (self.categoryHighlight() == r.cat);
        });
    })

        // sets and nulls the value of categoryHighlight
    self.highlightCategory = function(id){
        if (id == 'unspentSlice'){
            self.categoryHighlight(null);
        } else {
            if (self.categoryHighlight() == id){
                self.categoryHighlight(null);
            } else {
                self.categoryHighlight(id);
            }
        }
    }
    
        // this exists so the view can prompt the user to add categories
    self.userCategoriesLength = ko.computed(function () {
        return self.userCategories().length;
    })

        // adds a category to the model
    self.addCategory = function (data) {
        if (self.addCatValue().length > 0) {
            if (self.addCatValue().length <= 32) {
                if (self.addCatValue().toLowerCase() !== 'payday'){
                    self.userCategories.push(self.addCatValue());
                    self.categoryFeedback('');
                    self.addCatValue('');
                    self.categoryValidateState('');
                } else {
                    self.categoryValidateState('error');
                    self.categoryFeedback('Payday is reserved for income!');
                }
            } else {
                self.categoryValidateState('error');
                self.categoryFeedback('32 character limit');
            }
        } else {
            self.categoryValidateState('error');
            self.categoryFeedback('');
        }
    }

        // remoes a category from the model
    self.removeCategory = function (item) {
        self.userCategories.remove(item)
    }
    
        // subscribes to changes in the categories model. uses same logic as when an item is added
        // or removed from one of the arrays. provides callbacks to update the server.
    self.userCategories.subscribeArrayChanged(addCategoryToServer, removeCategoryFromServer);

        // add category callback to update server
    function addCategoryToServer(item) {
        if (self.loadstatus() > 1) {
            issue('addCategory', [
                ['name', self.user.name],
                ['sess', self.user.sess],
                ['cat', item]
            ], null, function (err, stat, text) {
                //console.log(err, stat, text)
            });
        }
    }

        // remove category callback to update server
    function removeCategoryFromServer(item) {
        if (self.loadstatus() > 1) {
            issue('deleteCategory', [
                ['name', self.user.name],
                ['sess', self.user.sess],
                ['cat', item]
            ], null, function (err, stat, text) {
                //console.log(err, stat, text)
            });
        }
    }
    
        // after click, shows a modal window with a list of categories
    self.editCategories = function () {
        self.modalStatus("categories");
    };

    self.editAccount = function () {
        self.modalStatus("account");
    }

    self.changePass = function(){
        issue('changePass',[
            ['name',self.user.name],
            ['sess', self.user.sess],
            ['oldPass',self.oldPass()],
            ['newPass',self.newPass()]
        ],null,function(err,stat,message){
            self.changePassError.removeAll();
            if (stat == 400){
                self.changePassError.push( new UImessage('Incorrect old password','error'));
                $("changepass_form").shake();
            } else if (stat == 500){
                self.changePassError.push( new UImessage('There was an error','error'));
            } else {
                self.changePassError.push( new UImessage('Password Changed Successfully','success'));
                setTimeout(function(){
                    self.changePassError.removeAll();
                },5000);
            }
        });
    }

    self.changeEmail = function(){
        issue('changeEmail',[
            ['name',self.user.name],
            ['sess', self.user.sess],
            ['email',self.userEmail()]
        ],null,function(err,stat,message){
            self.changeEmailError.removeAll();
            if (stat == 400){
                self.changeEmailError.push( new UImessage('Something went wrong','error'));
                $("changepass_form").shake();
            } else if (stat == 500){
                self.changeEmailError.push( new UImessage('There was an error','error'));
            } else {
                self.changeEmailError.push( new UImessage('Email Changed Successfully','success'));
                setTimeout(function(){
                    self.changeEmailError.removeAll();
                },5000);
            }
        });
    }
    
    self.loadBarWidth =  ko.computed (function()    {
        //console.log('running '+self.loadBarProgress());
        return "width: " + self.loadBarProgress()  + "%";
    });

        // after logging in, this gets the last 3 month of data from the server, adds the categories and items
        // to their respective arrays. triggers the load status to '2' so the rest of the view will appear and enables 
        // form fiends so the user can input items
    self.getInit = function () {
        self.modalStatus("");
        issue('getInit', [
            ['name', self.user.name],
            ['sess', self.user.sess]
        ], null, function (err, stat, datai) {
            if (err) {
                //console.log('error get Init')
            } else {
                datai = JSON.parse(datai);
                //console.log(datai)
                self.user.categories = JSON.parse(JSON.stringify(datai.categories));
                //var input_form_items = document.querySelectorAll('.input_form_item');
                if (self.user.categories.length == 0) {
                    self.modalStatus("tour");
                } else {
                    for (var i = 0; i < self.user.categories.length; i++) {
                        self.userCategories.push(self.user.categories[i]);
                    };
                }
                //console.log(datai.items);
                if (datai.items.length > 2) {
                        // The following is not in a for loop because the UI will not update 
                        // the progress bar until the for loop completes
                    var count = 0
                    function run(){
                        //console.log(count,datai.items.length - 2);
                        var progress = Math.floor((count/datai.items.length)*100);
                        if (progress % 10 == 0){
                            self.loadBarProgress(progress);
                        }
                        self.userItems.push(new rowitem(true, datai.items[count].desc, datai.items[count].amt, datai.items[count].year + "/" + datai.items[count].month + "/" + datai.items[count].day, datai.items[count].cat, datai.items[count].itemid, (datai.items[count].isflagged=="true"), datai.items[count].comment));
                        
                                // length minus 2 is important! it allows the regular subscribed function to render the high chart
                                // on the last item. if it was minus 1 then the subscribed funtion wouldn't run since all items are loaded.
                                // One more item remains to be loaded therefore we dont return the block right here.
                        if (count == datai.items.length - 2) {
                            //console.log('loadstatus2 at run');
                            self.loadstatus(2);
                        }
                        
                        count++;
                        
                        if (count >= datai.items.length){
                            //console.log('run returning',count);
                            return;
                        } else {
                            setTimeout(run,0);
                        }
                    }; 
                    run();
                } else if (datai.items.length > 1){
                    //console.log('loadstatus2 at not run');
                    self.loadstatus(2);
                    var flg = (datai.items[0].isflagged == 'true');
                    self.userItems.push(new rowitem(true, datai.items[0].desc, datai.items[0].amt, datai.items[0].year + "/" + datai.items[0].month + "/" + datai.items[0].day, datai.items[0].cat, datai.items[0].itemid, flg, datai.items[0].comment));
                } else {
                    //console.log('load status 2 at 0 items');
                    self.loadstatus(2);
                }
                var gitInitMonths = [
                    self.date.month+","+self.date.year,
                    self.date.one_month_back+","+self.date.one_month_back_yr,
                    self.date.two_month_back+","+self.date.two_month_back_yr
                    ]
                    
                for (i=0; i<gitInitMonths.length;i++){
                    self.loadedMonths.push(gitInitMonths[i]);
                }
            }
        });
    }
    
    // login function, loads user items and categories from server and pushes to obversvable arrays    
    self.login = function (newuser_name, newuser_pass) {
        newuser_name ? self.user.name = newuser_name : self.user.name = self.uname();
        newuser_pass ? self.user.pass = newuser_pass : self.user.pass = self.upass();
        issue('login', [
            ['name', self.user.name],
            ['pass', self.user.pass]
        ], null, function (err, stat, data) {
            if (err) {
                //console.log('error logining in')
            } else {
                if (stat == 400) {
                    //console.log('animating')
                    $("#signin_form").shake();
                } else if (stat == 200) {
                    data = JSON.parse(data)
                    $("#uname").val('');
                    $("#pass").val('');
                    self.loadstatus(1);
                    self.user.sess = data.sessionid;
                    self.user.email = data.email
                    self.userEmail(self.user.email);
                    self.getInit();
                    self.username(self.user.name);
                }
            }
        });
    }
        // destroys session and clears form fields and models 
    self.logout = function () {
        self.loadstatus(0);
        issue('logout', [
            ['name', self.user.name]
        ], null, function (err, stat, message) {
            if (err || stat != 200) {
                //console.log(err, stat, message)
            }
        });
        self.userItems.removeAll();
        self.userCategories.removeAll();
        self.loadedMonths.removeAll();
        self.currentyear(self.date.year);
        self.currentmonth(self.date.month);
        self.modalStatus("logout");
        document.forms.signin_form.uname.focus();
        setTimeout(function () {
            self.modalStatus("");
        }, 3000);
    }
    
        // adds user to server, triggers login, displays error messages
    self.newUser = function () {

        if (self.signup_uname() == '' || self.signup_pass() == '' || self.signup_email == '') {
            self.signuperror('You left something blank');
            return;
        }
        issue('newUser', [
            ['name', self.signup_uname()],
            ['pass', self.signup_pass()],
            ['email',self.signup_email()]
        ], null, function (err, stat, message) {
            if (err) {

            } else {
                if (stat == 400) {
                    self.signuperror(message);
                } else if (stat == 500) {
                    self.signuperror('There was an error');
                } else if (stat == 200) {
                    self.login(self.signup_uname(), self.signup_pass());
                     self.signup_uname("");
                    self.signup_pass("");
                    self.signup_email("");
                    return;
                }
            }
        });
    }
    
        // helper functions
    var currency_tooltip = $("#validate_amount").mouseover(function () {
        $(this).tooltip({
            title: "Ex. '45.99' or '46'"
        }).tooltip('show');
    });
    var datepicker = $("#validate_date").datepicker();
    
        // determines which XMLHTTP object to use
    var ajaxFunction = function () {
        var xmlhttp;
        try {
            xmlhttp = new XMLHttpRequest();
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    //console.log('no ajax?');
                    return false;
                }
            }
            
        }
        //console.log(xmlhttp);
        return xmlhttp;
    }
    
        // issues all ajax calls to server
    var issue = function (command, array, JSON, cb) {
        var url = command + "?";
        for (var i = 0; i < array.length; i++) {
            if (i !== 0) {
                url += "&" + array[i][0] + "=" + array[i][1];
            } else {
                url += array[i][0] + "=" + array[i][1];
            }
        }
        //console.log(url);
        var xmlhttp = new ajaxFunction();
        var data;
        var method;
        if (JSON) {
            data = JSON;
            method = "POST"
        } else {
            data = null;
            method = "GET"
        }
        xmlhttp.open(method, url, true);
        xmlhttp.send(data);
        xmlhttp.onreadystatechange = function () {
            if ((xmlhttp.status == 200 || xmlhttp.status == 400) && (xmlhttp.readyState == 4)) {
                cb(null, xmlhttp.status, xmlhttp.responseText);
                return;
            } else if (xmlhttp.status !== 200 && xmlhttp.status !== 400 && xmlhttp.readyState == 4) {
                cb(true);
                return;
            }
        }
    }
    

    self.modalClose = function () {
        self.modalStatus("");
    }
    self.showAbout = function(){
        self.modalStatus("about");
    }

    // ===========   Application Tours   ===========  

    self.endTour = function(){
        self.onTour(0)
    }

    self.startUserTour = function(){

        self.loadstatus.subscribe(function(val){
            if (val == 2 && self.onTour() == 1){
                //console.log(val,' loaded and ready for tour!');
                
                self.modalStatus("tour");
            }
        })

        self.login('demo','demo');
        self.onTour(1);
    }
    self.continueUserTour = function(){
        self.modalStatus("");
        
        if (self.onTour() == 1){

            var tour = new Tour({
                name: Math.random() * 1000000,
                backdrop: true,
                onEnd: function(tour){
                    self.onTour(0);
                }
            });
    
    
            tour.addStep({
                element: "#tour_categories",
                title: "Basics",
                content: "Setup your categories here",
                placement: 'bottom'  
            });
            tour.addStep({
                element: "#tour_input_categories",
                title: "Basics",
                content: "Add and remove categories here. Clicking the X removes the category but any category can be readded in the future",
                placement: 'left',
                onShow: function(tour){
                    self.modalStatus("categories");
                }
            });
            tour.addStep({
                element: "#tour_unused_categories",
                title: "Basics",
                content: "Removing a category doesn't delete items, so Tiny Budget will tell you if there are items with a deleted category",
                placement: 'left',
                backdrop: true, 
                onHide: function(){
                    self.modalStatus("");
                }
            });
            tour.addStep({
                element: "#input_form",
                title: "Basics",
                content: "Input your spending items here",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_month_select",
                title: "Basics",
                content: "Change which month you are viewing here",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#highchart",
                title: "The Pie",
                content: "Each months categories are shown on the pie for a quick visual reference of your spending",
                placement: 'top',
                backdrop: true    
            });
            tour.addStep({
                element: "#highchart",
                title: "The Pie",
                content: "Clicking on a pie slice brings all the items in the caregory to the Highlight Table",
                placement: 'top',
                backdrop: true,
                onHide: function(){
                    self.categoryHighlight(self.userCategories()[0]);
                }          
            });
            tour.addStep({
                element: "#tour_highlight_table",
                title: "Category Highlight",
                content: "Items for the selected category will show up here. You can delete, flag, or comment them",
                placement: 'top',
                backdrop: true
            });
            tour.addStep({
                element: "#tour_all_items",
                title: "All Your Items",
                content: "All of your items show up here. As with the table above, you can also delete, flag, or comment them.",
                placement: 'top',
                backdrop: true
            });
    
    
            tour.start(true);
        }
    }

    self.startTechTour = function(){

        self.loadstatus.subscribe(function(val){
            if (val == 2 && self.onTour() == 2){
                //console.log(val,' loaded and ready for tour!');
                
                self.modalStatus("tech");
            }
        })

        self.login('demo','demo');
        self.onTour(2);
    }
    self.continueTechTour = function(){
        self.modalStatus("");
        
        if (self.onTour() == 2){

            var tour = new Tour({
                name: Math.random() * 1000000,
                onEnd: function(tour){
                    self.onTour(0);
                }
            });
    
            tour.addStep({
                element: "#input_form",
                title: "MV-VM",
                content: "Using a form, each item is added to the knockout model and through knockout's <em>subscribe</em> feature, the server is updated iach time the model changes. The UI uses knockout data bindings to automatically update each time the model changes",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_breakdown_table",
                title: "Breakdown &amp; Category Highlight",
                content: "This section contains two tables. Through data bindings one of them is always hidden. When a user clicks a pie slice, a knockout computed array is given the value to filter by and returns an array of items in that category, bringing up the Category Highlight table. Clicking again sets the filter value to null, hiding the Category Highlight table",
                placement: 'right',
                backdrop: false,
                onHide: function(){
                    self.categoryHighlight(self.userCategories()[0]);
                }   
            });
            tour.addStep({
                element: "#tour_highlight_table",
                title: "Breakdown &amp; Category Highlight",
                content: "Using a 'foreach' binding, the Highlight table loads each items data and toggles some css classes depending on whether the item is flagged or commented",
                placement: 'right',
                backdrop: false,
                onHide: function(){
                    self.categoryHighlight(null);
                }   
            });
            tour.addStep({
                element: "#highchart",
                title: "Highcharts",
                content: "The data used to construct the pie chart is the same for the Breakdown table. Each time an item is added, or month is changed the data is cleared and the new filtered array is loaded to both the Breakdown table and the pie chart",
                placement: 'left',
                backdrop: false  
            });
            tour.addStep({
                element: "#tour_month_select",
                title: "Knockout Observables",
                content: "Because Knockout keeps such good track of function subscriptions, updating the entire UI for each month was as simple as implimenting buttons that increment or decrement a value that the arrays filter by. The UI is updated automatically",
                placement: 'bottom',
                backdrop: true    
            });
            tour.addStep({
                element: "#tour_all_items",
                title: "All Your Items",
                content: "Sorting the items in this table was a real challenge. Clicking a chevron sorts the entire array of userItems, not just this months filtered items. Special functions are in place to overide automatic server calls when sorting occurs",
                placement: 'top',
                backdrop: true
            });
    
    
            tour.start(true);
        }
    }

}
var tinybudget = { viewmodel: new AppViewModel()};

ko.applyBindings(tinybudget.viewmodel);
document.forms.signin_form.uname.focus();
//console.log(tinybudget);
