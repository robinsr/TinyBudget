var CSVFileReader = (function(){
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
		}

		for (k=0;k<docData.firstLineWithMaxItems;k++){
			docData.ignoreLine.push(0);
		}

		console.log(docData);

		if (docData.amountIndex == null && (docData.debitIndex != null && docData.creditIndex != null)){
			console.log('parse using debit/credit');
			parseDC(docData);
		} else if (docData.amountIndex != null && (docData.debitIndex == null && docData.creditIndex == null)){
			console.log('parse using amount');
			parseA(docData);
		} else {
			console.log('send error');
		}

		
	}
	function parseA(docData){
		var parsedItems = [];
		for (i=docData.firstLineWithMaxItems+1;i<docData.lines.length-1;i++){
			console.log("on line",i);


			var thisLine = docData.lines[i].split(",");
			var thisItem = {};
			var d = thisLine[docData.dateIndex].split("/");

			thisItem.desc = thisLine[docData.descIndex].substring(0,31);
			thisItem.amt = thisLine[docData.amountIndex].replace("-","");
			thisItem.month = d[0];
			thisItem.day = d[1];
			thisItem.year = d[2];

			parsedItems.push(thisItem);
		}
		console.log(parsedItems);
	}
	function parseDC(docData){
		var parsedItems = [];
		for (i=docData.firstLineWithMaxItems+1;i<docData.lines.length-1;i++){
			console.log("on line",i);


			var thisLine = docData.lines[i].split(",");
			var thisItem = {};
			var d = thisLine[docData.dateIndex].split("/");

			thisItem.desc = thisLine[docData.descIndex].substring(0,31);
			if (thisLine[docData.debitIndex].length > 1){
				thisItem.amt = thisLine[docData.debitIndex].replace("-","");
			} else if (thisLine[docData.creditIndex].length > 1){
				thisItem.amt = thisLine[docData.creditIndex].replace("-","");
			} else {
				console.log("skipping item",thisLine);
			}
			thisItem.month = d[0];
			thisItem.day = d[1];
			thisItem.year = d[2];

			parsedItems.push(thisItem);
		}
		console.log(parsedItems);
	}
	return {
		main: function(){
			if (window.File && window.FileReader && window.FileList && window.Blob) {
			  console.log("Great success! All the File APIs are supported.");

			  $("#CSVinput").change(function(evt){
			  		var file = evt.target.files;

			  		console.log(file);

			  		if (file.length > 1){
			  			console.log("more than one file selected. Quiting process");
			  			return;
			  		} else if (file[0].type != "text/csv") {
			  			console.log("Not a csv file. Quiting process");
			  			return
			  		} else {
			  			var reader = new FileReader();

			  			reader.onload = (function(theFile){
			  				return function(e) {
			  					parseCSV(e.target.result);
			  				}
			  			})(file[0]);

			  			reader.readAsText(file[0]);
			  		}
			  });
			} else {
			  alert('The File APIs are not fully supported in this browser.');
			}
		}
	}
})();