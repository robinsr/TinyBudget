// =============  Custom jQuery shake animation =================

$(function(){
    $.fn.shake = function(){
        this.animate({
            marginLeft: '-6px'
        }, 30, function (el) {
            $(this).animate({
                marginLeft: '6px'
            }, 30, function (el) {
                $(this).animate({
                    marginLeft: '0'
                }, 30)
            });
        });
    }
});


// ===========  Utils module =============
var tinybudgetutils = (function(){
    function ajaxFunction () {
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
                    console.log('no ajax?');
                    return false;
                }
            }
            
        }
        return xmlhttp;
    }

	return {
		currency_tooltip: $("#validate_amount").mouseover(function () {
	        $(this).tooltip({
	            title: "Ex. '45.99' or '46'"
	        }).tooltip('show');
	    }),
	    datepicker: $("#validate_date").datepicker(),
	    
	        // determines which XMLHTTP object to use
	    
	    
	        // issues all ajax calls to server
	    issue : function (command, array, JSON, cb) {
	        var url = command + "?";
	        for (var i = 0; i < array.length; i++) {
	            if (i !== 0) {
	                url += "&" + array[i][0] + "=" + array[i][1];
	            } else {
	                url += array[i][0] + "=" + array[i][1];
	            }
	        }
	        //console.log(url);
	        $.ajax({
	        	url: url,
	        	type: 'get',
	        	error: function(data){
	        		cb(true);
	        		return
	        	},
	        	complete: function(data){
	        		cb(null,200,data.responseText);
	        		return
	        	}
	        });
	        /*var xmlhttp = new ajaxFunction();
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
	        }*/
	    }
	}
})();