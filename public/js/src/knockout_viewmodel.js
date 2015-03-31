// ==============  KNOCKOUT VIEWMODEL ================

    // the main viewmodel for this app
function AppViewModel() {
    var self = this; 

    self.date;
    self.currentyear = ko.observable();
    self.currentmonth = ko.observable();
    self.loadedMonths = ko.observableArray([]);  // loadstatus: 0: logged out, 1: logged in no data, 2: logged in with data, 3: loading additional data
    self.loadstatus = ko.observable(0);
    self.signuperror = ko.observable(0);
    self.inputFeedback = ko.observable('');
    self.expenseOrPaydayActive = ko.observable("expense");
    self.userItems = ko.mapping.fromJS([])
    self.desc = ko.observable('');
    self.amt = ko.observable('');
    self.input_date = ko.observable('');
    self.cat = ko.observable(""); 
    self.input_error = ko.observable("");
    self.sorting = false;
    self.showUnspent = ko.observable(false);
    self.unusedCategories = ko.observableArray([]);
    self.categoryHighlight = ko.observable();
    self.userCategories = ko.mapping.fromJS([]);   
    self.categoryFeedback = ko.observable();
    self.categoryValidateState = ko.observable();
    self.addCatValue = ko.observable("");
    self.username = ko.observable();
    self.userEmail = ko.observable();
    self.changePassError = ko.observableArray([]);
    self.oldPass = ko.observable("");
    self.newPass = ko.observable("");
    self.changeEmailError = ko.observableArray([]);
    self.csvLoadBarProgress = ko.observable(0);
    self.uname = ko.observable('');
    self.relogin_uname = ko.observable('');
    self.relogin_pass = ko.observable('');
    self.relogin_error = ko.observable('');
    self.upass = ko.observable('');
    self.signup_uname = ko.observable("");
    self.signup_pass = ko.observable("");
    self.signup_email = ko.observable("");
    self.modalStatus = ko.observable("");
    self.onTour = ko.observable(0);// 0 not onTour; 1 User Tour; 2 Tech Tour    
    self.editableItem = ko.observable();
    self.canCSV = ko.observable(false);
    self.statsCategory = ko.observableArray([])

    /**
     * allCategoriesTotal
     * @return {Number}   Total of all items in all categories
     */
    self.allCategoriesTotal = ko.computed(function () {
        return _.chain(self.filteredUserItems())
            .filter(function (item) {
                return item.cat() != 'payday';
            })
            .map(function (item) {
                return parseFloat(item.amt());
            })
            .reduce(function (sum, val) {
                return Math.round((sum + val) * 100) / 100;
            })
            .value();
    });

    /**
     * paydayTotal
     * @return {Number}   Total of all paydays
     */
    self.paydayTotal = ko.computed(function () {
        return _.chain(self.filteredUserItems())
            .filter(function (item) {
                return item.cat() == 'payday';
            })
            .map(function (item) {
                return parseFloat(item.amt());
            })
            .reduce(function (sum, val) {
                return Math.round((sum + val) * 100) / 100;
            })
            .value();
    });

    /**
     * userCategoriesTotals
     * Array of categoryTotal objects
     */
    self.userCategoriesTotals = ko.computed(function () {
        var categoryMap = _.chain(self.filteredUserItems())
            .filter(function (item) {
                return item.cat() != 'payday';
            })
            .groupBy(function (item) {
                return item.cat();
            })
            .mapValues(function (cat) {
                return _.chain(cat).map(function (item) {
                    return parseFloat(item.amt());
                })
                .reduce(function (sum, val) {
                    return Math.round((sum + val) * 100) / 100;
                })
                .value();
            })
            .value();

        var totals = [];

        for (var n in categoryMap) {
            totals.push(new categoryTotal(n, categoryMap[n]))
        }

        return totals;
    });

    /**
     * updatePieChart
     * Creates the series data for the pie chart, based on category totals
     * @param  {Array} value Array of categoryTotal objects
     */
    self.userCategoriesTotals.subscribe(function updatePieChart (categoryTotals) {
        chart_objects.pie_chart.series[0].data = _.chain(categoryTotals)
            .filter(function (item) {
                return item.name != 'payday';
            })
            .map(function (item) {
                item.y = item.amount;
                item.id = item.name;
                return item;
            })
            .value();

        self.renderChart();
    });

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        self.canCSV(true);
    }
    
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
                var amp = tinybudgetutils.validate('desc',self.desc())
                if (!amp){
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
                                            date[i] = parseInt(date[i], 10);
                                            //console.log('parsing ' + date[i])
                                        };
                                            // check is day, month, and year are acceptable
                                        if ((0 < date[0]) && (date[0] < 13) && (!isNaN(date[0]))) {
                                            if ((0 < date[1]) && (date[1] < 32) && (!isNaN(date[1]))) {
                                                if ((2011 < date[2]) && (date[2] < 2100) && (!isNaN(date[2]))) {
                                                    self.input_error("");
                                                    var cat = self.expenseOrPaydayActive() == 'payday' ? 'payday' : self.cat();
                                                    self.userItems.push(new rowitem(false, self.desc(), parsed_input, self.input_date(), cat));
                                                    self.resetInputs();
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
                    self.validateFail('desc_amp')
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
            case 'desc_amp':
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
            'desc_amp': 'Descriptions cannot have ampersands (&)',
            'desc': 'Your item needs a description',
            'amt': 'Enter valid dollar amount like 12.34. No need for a "$"',
            'desc_long': 'Descriptions limited to 32 characters',
            'amt_long': 'Amounts limited to 8 digits (also, wow that\'s expensive!)',
            'date': 'Date format is MM/DD/YYYY'
        } 
        self.inputFeedback(message[type]);
    }
    self.resetInputs = function(){
        if (is_ie){
            self.desc("Description");
            self.amt("Amount");
            self.input_date("Date");
        } else {
            self.desc("");
            self.amt("");
            self.input_date("");
        }
    }

        // removes item from knockout observable array userItems
    self.removeItem = function (item) {
        self.userItems.remove(item)
    };
    
        // subscribes to changes in userItems array. Uses a custom function to detect whether an item
        // was added or removed from the array and then provides an add and remove callback 
    self.userItems.subscribeArrayChanged(server.addItemToServer, server.removeItemFromServer);
    
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



        // =========== EDITABLE ITEM ===================


        // UI click handler - user clicks from list of items
    self.loadItemForEdit = function(item,event){
        if (self.modalStatus() == ''){
            self.editableItem(item.itemid);
            self.modalStatus('edit');
        }
    }

        // UI click handler - user clicks 'save' after editing item
    self.updateItem = function(){
        var itemInArrayToUpdate = ko.utils.arrayFirst(self.userItems(), function(item) {
            return item.itemid == self.editableItem() 
        });

        if (itemInArrayToUpdate) {
            itemInArrayToUpdate.loadedFromServer = false;
            server.addItemToServer(itemInArrayToUpdate);
            self.modalStatus('')
        } else {

        }
    }


        // ==============================================

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
                var l_parse = parseInt(l.amt()),
                    r_parse = parseInt(r.amt());
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
        //console.log('renderChart triggered')
        //console.log(is_ie);
        if (is_ie === false){
            //console.log('first path');
            $('#highchart').highcharts(chart_objects.pie_chart);
        }
        else {
            //console.log('second path');
            chart_objects.pie_chart.plotOptions.pie.animation = false;
            $('#highchart').highcharts(chart_objects.pie_chart);
            //console.log("animation "+chart_objects.pie_chart.plotOptions.pie.animation)
        }
        
    }

    /**
     * showOrHideUnspent
     * Updates the highcharts object, either adds or removes the 'unspent' 
     * slice (the difference in paydays minus all items)
     * @param  {Boolean} checked
     */
    self.showUnspent.subscribe(function showOrHideUnspent (checked) {
        if (checked && self.difference() > 0) {
            chart_objects.pie_chart.series[0].data.push({
                name: 'Unspent', 
                y: parseFloat(self.difference()),
                id:'unspentSlice'
            })
            return self.renderChart();
        }
        _.remove(chart_objects.pie_chart.series[0].data, {
            id: 'unspentSlice'
        });
        self.renderChart();
    });

        // filter function to find unused categories    
    self.filteredUserItems.subscribe(function (array) {
        self.unusedCategories.removeAll();
        for (var i = 0; i < array.length; i++) {

            var match = ko.utils.arrayFirst(self.userCategories(), function (category) {
                return array[i].cat() == category
            });

            if (!match) {
                var second_match = ko.utils.arrayFirst(self.unusedCategories(), function (unused) {
                    return array[i].cat() == unused
                });
                if (!second_match) {
                    self.unusedCategories.push(array[i].cat())
                }
            }
        };
    });

        // function to check if category exists
    self.checkCategory = function(catToCheck){
        return ko.utils.arrayFirst(self.userCategories(), function(userCategory){
            return catToCheck.toLowerCase() == userCategory.toLowerCase();
        });
        return "uncategorized";
    }


        // holds the array of items that match the name of the category in categoryHighlight
    self.categoryHighlightFilter = ko.computed(function(){
        return ko.utils.arrayFilter(self.userItems(), function (r) {
            return (self.currentyear() == r.year()) && (self.currentmonth() == r.month()) && (self.categoryHighlight() == r.cat());
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
        if (typeof data !== 'string') {
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
        } else {
            self.userCategories.push(data);
            var match = ko.arrayFirst(self.unusedCategories(),function(cat){
                return (cat == data);
            })
        }
    }

        // remoes a category from the model
    self.removeCategory = function (item) {
        self.userCategories.remove(item)
    }
    
        // subscribes to changes in the categories model. uses same logic as when an item is added
        // or removed from one of the arrays. provides callbacks to update the server.
    self.userCategories.subscribeArrayChanged(
        function(item){server.addCategoryToServer(item)},
        function(item){server.removeCategoryFromServer(item)}
    );
    
        // after click, shows a modal window with a list of categories
    self.editCategories = function () {
        self.modalStatus("categories");
    };

    self.editAccount = function () {
        self.modalStatus("account");
    }

    self.changePass = function(){
        tinybudgetutils.issue('changePass',[
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
        tinybudgetutils.issue('changeEmail',[
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
    
    self.expiredSession = function(){
        self.modalStatus("sessionLogin");
    }
    self.serverError = function(){
        self.modalStatus("serverError");
    }
    
    self.csvloadBarWidth =  ko.computed (function()    {
        //console.log('running '+self.getInitLoadBarProgress());
        return "width: " + self.csvLoadBarProgress()  + "%";
    });

    // login function, loads user items and categories from server and pushes to obversvable arrays    
    self.login = function (newuser_name, newuser_pass,cb) {
        newuser_name ? self.user.name = newuser_name : self.user.name = self.uname();
        newuser_pass ? self.user.pass = newuser_pass : self.user.pass = self.upass();
        if (self.user.name == '' || self.user.pass == ''){
            self.user.name = $("#uname").val();
            self.user.pass = $("#pass").val();
        }
        tinybudgetutils.issue('login', [
            ['name', self.user.name],
            ['pass', self.user.pass]
        ], null, function (err, stat, data) {
            if (err) {
                //console.log('error logining in')
            } else {
                if (stat == 400 && cb == null) {
                    //console.log('animating')
                    $("#signin_form").shake();
                } else if (stat == 400 && cb != null){
                    cb('error');    
                } else if (stat == 200) {
                    data = JSON.parse(data)
                    $("#uname").val('');
                    $("#pass").val('');
                    self.loadstatus(1);
                    self.uname('');
                    self.upass('');
                    self.user.sess = data.sessionid;
                    self.user.email = data.email
                    self.userEmail(self.user.email);
                    getInit.main();
                    self.username(self.user.name);
                } else {
                    self.modalStatus("serverError");
                }
            }
        });
    }
    self.relogin = function(){
        self.login(self.relogin_uname(),self.relogin_pass(),function(code){
            if (code){
                self.relogin_error('Invalid Username or Password');
            }
        })
    }
        // destroys session and clears form fields and models 
    self.logout = function () {
        self.loadstatus(0);
        tinybudgetutils.issue('logout', [
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
        tinybudgetutils.issue('newUser', [
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
    

    self.modalClose = function () {
        self.modalStatus("");
    }
    self.showAbout = function(){
        self.modalStatus("about");
    }
    self.startCSV = function(){
        self.modalStatus("csv");
    }
    self.doneWithCSV = function(){
        self.modalClose();
        self.csvLoadBarProgress(0);
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
            user_tour.init();
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
            tech_tour.init();
        }
    }

    // ================ STATS SECTION ================

    this.costlyCategory = ko.observable();
    this.costlyCategoryPerItem = ko.observable();
    this.mostCategory = ko.observable();
    this.mostCategoryPerItem = ko.observable();
    this.lifeCost = ko.observable();
    this.lifeIncome = ko.observable();
    this.netWorth = ko.observable();
    this.netWorthSign = ko.computed(function(){
        var number = self.netWorth();
        var sign = number?number<0?'-':'':'';
        return sign;
    });

    self.stats = function(){
        self.modalStatus('stats');
        tinybudgetutils.issue('getCategoryTotals', [
            ['name', self.user.name],
            ['sess', self.user.sess],
            ['year', self.currentyear()]
        ], null, function (err, stat, data) {
            if (err) {
            } else {
                self.statsCategory.removeAll();
                $(JSON.parse(data)).each(function(index,item){
                    self.statsCategory.push(new statCategoryTotal(item.cat,item.amt,item.items,item.avg,item.likely_day))
                })
            }
        });
        tinybudgetutils.issue('getIncomePerDay', [
            ['name', self.user.name],
            ['sess', self.user.sess],
            ['year', self.currentyear()],
            ['month', self.currentmonth()]
        ], null, function (err, stat, data) {
            if (err) {
            } else {
                self.statsCategory.removeAll();
                var datai = JSON.parse(data)

                self.lifeCost(parseFloat(datai.calculations.expensePerDay/100).toFixed(2));
                self.lifeIncome(parseFloat(datai.calculations.payPerDay/100).toFixed(2));
                self.netWorth(parseFloat(Math.abs(datai.calculations.netPerDay)/100).toFixed(2));
            }
        });
    }
    


}
var tinybudget = { viewmodel: new AppViewModel() };


