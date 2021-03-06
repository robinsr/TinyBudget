var CSVFileReader = (function(){
	var replace_string = "POS Withdrawal - ";
	function parseCSV(data){
		var parsed;
		var lines = data.replace(/\"/g,"");
		lines = lines.split("\n");
		var docData = {
			ignoreLine : [],
			headerLine : 0,
			dateIndex : null,
			amountIndex : null,
			debitIndex : null,
			creditIndex : null,
			descIndex : null,
			catIndex: null,
			maxItemsOnALine : null,
			firstLineWithMaxItems : null,
			items : {},
			lineObject : {},
			lines : lines
		}


    // determine the column headers (some CSVs have accoutn data at top of document)
    for (i=0; i<lines.length; i++){
    	var thisLine = lines[i].split(",");
    	if (thisLine.length > docData.maxItemsOnALine){
    		docData.maxItemsOnALine = thisLine.length;
    		docData.firstLineWithMaxItems = i;
    		docData.headerLine = thisLine;
    	}
    }

    // determine what each column header represents
    for (j=0;j<docData.headerLine.length;j++){
    	var cleanString = docData.headerLine[j].toLowerCase().replace("\"","")
    	if (cleanString == "description") {docData.descIndex = j}
    		else if (cleanString == "amount") {docData.amountIndex = j}
    			else if (cleanString == "debit") {docData.debitIndex = j}
    				else if (cleanString == "credit") {docData.creditIndex = j}
    					else if (cleanString == "date") {docData.dateIndex = j}
    						else if (cleanString == "category") {docData.catIndex = j}
    					}

    				for (k=0;k<docData.firstLineWithMaxItems;k++){
    					docData.ignoreLine.push(0);
    				}

    //console.log(docData);

    if (docData.amountIndex == null && (docData.debitIndex != null && docData.creditIndex != null)){
      //console.log('parse using debit/credit');
      return parseDebitCredit(docData);
    } else if (docData.amountIndex != null && (docData.debitIndex == null && docData.creditIndex == null)){
      //console.log('parse using amount');
      return parseAmount(docData);
    } else {
      //console.log('send error');
    }
  }

    // parses CSV files where one column is "amount" and is either negative or positive
    function parseAmount(docData){
    	var parsedItems = [];
    	for (i=docData.firstLineWithMaxItems+1;i<docData.lines.length-1;i++){
      //console.log("on line",i);


      var thisLine = docData.lines[i].split(",");
      var thisItem = {};
      var d = thisLine[docData.dateIndex].split("/");
      thisLine[docData.descIndex] = thisLine[docData.descIndex].replace(replace_string,"");
      thisItem.desc = thisLine[docData.descIndex].substring(0,31);

      if (tinybudget.viewmodel.checkCategory(thisLine[docData.catIndex]) != null){
      	thisItem.cat = tinybudget.viewmodel.checkCategory(thisLine[docData.catIndex]);
      } else {
      	var re = /-/
      	var match = re.test(thisLine[docData.amountIndex]);
      	if (match){
      		thisItem.cat = "uncategorized";
      	} else {
      		thisItem.cat = "payday";
      	}
      }

      thisItem.amt = thisLine[docData.amountIndex].replace("-","");           
      
      thisItem.month = d[0];
      thisItem.day = d[1];
      thisItem.year = d[2];
      thisItem.itemid = (CryptoJS.MD5(Math.random().toString())).toString();

      parsedItems.push(thisItem);
    }
    return parsedItems;
  }
    // parses CSV files where amount is split between "debit" and "credit"
    function parseDebitCredit(docData){
    	var parsedItems = [];
    	for (i=docData.firstLineWithMaxItems+1;i<docData.lines.length-1;i++){
      //console.log("on line",i);


      var thisLine = docData.lines[i].split(",");
      var thisItem = {};
      var d = thisLine[docData.dateIndex].split("/");
      thisLine[docData.descIndex] = thisLine[docData.descIndex].replace(replace_string,"");
      thisItem.desc = thisLine[docData.descIndex].substring(0,31);
      if (thisLine[docData.debitIndex].length > 1){
      	thisItem.amt = thisLine[docData.debitIndex].replace("-","");
      	thisItem.cat = "uncategorized";
      } else if (thisLine[docData.creditIndex].length > 1){
      	thisItem.amt = thisLine[docData.creditIndex].replace("-","");
      	thisItem.cat = "payday";
      }

        // var checkCat = tinybudget.viewmodel.checkCategory();
        // console.log(checkCat);

        // if (docData.descIndex != null && thisItem.cat != "payday" && checkCat != null){
        // 	thisItem.cat = thisLine[docData.catIndex]
        // } else if (checkCat == null){
        // 	console.log("category "+thisLine[docData.catIndex]+" is not an okay category");
        // }

        thisItem.month = d[0];
        thisItem.day = d[1];
        thisItem.year = d[2];
        thisItem.itemid = (CryptoJS.MD5(Math.random().toString())).toString();

        parsedItems.push(thisItem);
      }
      return parsedItems;
    }
    function addToViewModel(parsed){
      // 'sorting' mode disables highcharts from rendering repetitively
      tinybudget.viewmodel.sorting = true;
      var i = 0;
      // look for duplicate items in viewmodel

      function add(){

      	var progress = Math.floor((i/(parsed.length-1))*100);
      	tinybudget.viewmodel.csvLoadBarProgress(progress);

      	//console.log(progress);
      	var gluedDate = parsed[i].month +"/"+ parsed[i].day +"/"+ parsed[i].year;
        // loadedFromServer set to True, prevents auto loading to server
        var row = new rowitem(true,parsed[i].desc,parsed[i].amt,gluedDate,parsed[i].cat,parsed[i].itemid,null,null);
        tinybudget.viewmodel.userItems.push(row);


        if (i >= parsed.length-1){
        	return;
        } else if (parsed.length - i == 2){
          // if there is 1 item left in parsed to add to the viewmodel, enable highcharts to render when triggered
          tinybudget.viewmodel.sorting = false;
          i++;
        	setTimeout(add,100);
        }else {
        	i++;
        	setTimeout(add,100);
        }
      }
      add();
    }
    return {
    	main: function(){
    		if (window.File && window.FileReader && window.FileList && window.Blob) {

    			$("#CSVinput").change(function(evt){
    				var file = evt.target.files;

    				var re = /.*\.csv/
    				var match = re.test(file[0].name);

    				if (file.length > 1){
              //console.log("more than one file selected. Quiting process");
              return;
            } else if (!match) {
              //console.log("Not a csv file. Quiting process");
              return
            } else {
            	var reader = new FileReader();

            	reader.onload = (function(theFile){
            		return function(e) {
            			var parsed = parseCSV(e.target.result);

            			addToViewModel(parsed);
            			tinybudgetutils.issue('addMultipleItems',[
            				['name',tinybudget.viewmodel.user.name],
            				['sess',tinybudget.viewmodel.user.sess]
            				],parsed,function(err,stat,data){
            					if (err || stat == 500){
            						tinybudget.viewmodel.serverError();
            					} else {
                      // all is well?
                    }
                  });
            		}   
            	})(file[0]);

            	reader.readAsText(file[0]);
            }
          });
}
}
}
})();
