// hi I cahnged this file
// ===============  KNOCKOUT CUSTOM FUNCTIONS ==============


    // compares two states of an array to determine what item was added or removed
ko.observableArray.fn.subscribeArrayChanged = function (addCallback, deleteCallback) {
    
    var previousValue = undefined;
    
        // subscribe to the array change but get the previous version that existed before the change
    this.subscribe(function (_previousValue) {
        previousValue = _previousValue.slice(0);
    }, undefined, 'beforeChange'); 
    
        // another subsciption but get the current version of the array
    this.subscribe(function (latestValue) {

        // knockout utility compareArrays returns an array with the index of each item in the array
        // and the 'status'.
        var editScript = ko.utils.compareArrays(previousValue, latestValue);

        // loop through the array
        for (var i = 0; i < editScript.length; i++) {
            switch (editScript[i].status) {

                // if the item in both arrays is there, ie it was 'retained' then do nothing
                case "retained":
                    break;

                    // if the item was deleted then call the callback to delete the item from the server
                case "deleted":
                    if (deleteCallback)
                        deleteCallback(previousValue[i]);
                    break;

                    // if the item was added then call the callback to add an the item to the server
                case "added":
                    if (addCallback)
                        addCallback(latestValue[i]);
                    break;
            }
        }
        previousValue = undefined;
    });
};

// ==============  KNOCKOUT OBJECTS ==================

    // object representing an item in a user's collections of items
function rowitem(loadedFromServer, desc, amt, date, cat, itemid, flag, comment) {
    var self = this;
    self.desc = desc;
    self.amt = amt;
    self.date = date;
    self.cat = cat;
    self.year = ko.computed(function () {
        return dateFormat(Date.parse(self.date), 'yyyy');
    });
    self.month = ko.computed(function () {
        return dateFormat(Date.parse(self.date), 'm');
    });
    self.day = ko.computed(function () {
        return dateFormat(Date.parse(self.date), 'd');
    });
    self.formattedDate = ko.computed(function () {
        return dateFormat(Date.parse(self.date), 'mmm d, yyyy');
    });
    self.editableDateFormat = ko.computed(function(){
        return self.month() +"/" + self.day() + "/" + self.year();
    });
    self.editableDate = ko.observable(self.editableDateFormat());
    
    self.isflagged = ko.observable();
    flag ? self.isflagged(true): self.isflagged(false);

    self.comment = ko.observable();
    comment ? self.comment(comment): self.comment('');
    
    itemid ? self.itemid = itemid : self.itemid = CryptoJS.MD5(Math.random().toString());
    
        // to avoid re-adding items to server when the server loads items
    self.loadedFromServer = loadedFromServer;
}


    // object representing the total monetary values of each category
function categoryTotal(name, amount) {
    var self = this;
    self.name = name;
    self.amount = amount;
}

    // object representing total items, average cost, average day -- seems redundant
function statCategoryTotal(name, amount, items, avg, day) {
    var self = this;
    self.name = name;
    self.amount = amount;
    self.items = items;
    self.average = avg;
    self.likely_day = day;
}

    // object representing a UI message for various feedback to the user
function UImessage(message,level) {
    var self = this;
    self.message = message;
    self.level = level;
}

    // for displaying month names
var monthName = {
    '1': 'January',
    '2': 'Febuary',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
};

