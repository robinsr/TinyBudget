var tech_tour = (function(){ 

    return {
        init: function(){  
            //console.log('tech tour called');
            
    		var tour = new Tour({
                name: Math.random() * 1000000,
                onEnd: function(tour){
                    tinybudget.viewmodel.onTour(0);
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
                element: "#tour_csvbutton",
                title: "HTML5 FileReader",
                content: "Alternatively, a user can 'upload' a CSV file of their bank statement. A script parses the CSV file and adds the items to the model. The file is not uploaded but read by the browser using the HTML5 FileReader API",
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
                    tinybudget.viewmodel.categoryHighlight(tinybudget.viewmodel.userCategories()[0]);
                }   
            });
            tour.addStep({
                element: "#tour_highlight_table",
                title: "Breakdown &amp; Category Highlight",
                content: "Using a 'foreach' binding, the Highlight table loads each items data and toggles some css classes depending on whether the item is flagged or commented",
                placement: 'right',
                backdrop: false,
                onHide: function(){
                    tinybudget.viewmodel.categoryHighlight(null);
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
    };
})();

var user_tour = (function(){ 

    return {
        init: function(){  
            //console.log('user tour called');
            
            var tour = new Tour({
                name: Math.random() * 1000000,
                backdrop: true,
                onEnd: function(tour){
                    tinybudget.viewmodel.onTour(0);
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
                    tinybudget.viewmodel.modalStatus("categories");
                }
            });
            tour.addStep({
                element: "#tour_unused_categories",
                title: "Basics",
                content: "Removing a category doesn't delete items, so Tiny Budget will tell you if there are items with a deleted category",
                placement: 'left',
                backdrop: true, 
                onHide: function(){
                    tinybudget.viewmodel.modalStatus("");
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
                content: "Clicking on a pie slice brings all the items in the category to the Highlight Table",
                placement: 'top',
                backdrop: true,
                onHide: function(){
                    tinybudget.viewmodel.categoryHighlight(tinybudget.viewmodel.userCategories()[0]);
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
    };
})();