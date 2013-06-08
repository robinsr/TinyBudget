var CSVFileReader = (function(){
	return {
		main: function(){
			if (window.File && window.FileReader && window.FileList && window.Blob) {
			  console.log("Great success! All the File APIs are supported.");
			} else {
			  alert('The File APIs are not fully supported in this browser.');
			}
		}
	}
})();