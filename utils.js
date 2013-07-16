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
    /*function ajaxFunction () {
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
    }*/

  return {
    validate:function(type,input) {
        var error;
        if (type == 'desc'){
          console.log('validating');

          var pat = /.*\&/
        var m1 = pat.test(input);

            if (input.length == 0){
                error = "too short";
                return error;
            } else if (input.length > 32){
                error = "too long";
                return error;
            } else if (m1){
              console.log(m1);
              error = 'Ampersand';
              return error;
            } else {
              console.log('nothing wrong with desc');
                return null
            }

        } else if (type == 'amt'){

            if (input.length == 0){
                error = "too short";
                return error;
            } else if (input.length > 8){
                error = "too long";
                return error;
            } else {
                var re = /^-?\$?[0-9]*\.?([0-9]{2})?$/
                var m2 = re.test(input)
                //console.log('tested and ' + m2)
                if (!m2) {
                    error = "invalid amount format";
                    return error;
                } else {
                    var parsed_input = parseFloat(input).toFixed(2);
                    if (isNaN(parsed_input)) {
                        error = "invalid amount format";
                        return error;
                    } else {
                        return null;
                    }
                }
            }

        } else if (type == 'date'){

            var date = input.split("/");

            if (!(date[0] && date[1] && date[2])){
                error = "invalid date format";
                return error;
            } else {

                for (var i = 0; i < date.length; i++) {
                    date[i] = parseInt(date[i]);
                    //console.log('parsing ' + date[i])
                    if (isNaN(date[i])){
                        error = 'date string not a number';
                        return error;
                    }
                };

                if ( (date[0] == 0) || (date[0] > 12) || (date[1] == 0) || (date[1] > 31) || (date[2] < 2011) || (date[2] > 2015) ) {
                    error = 'date is invalid';
                    return error;
                } else {
                    return null
                }
            }
        }
    },
    currency_tooltip: $("#validate_amount").mouseover(function () {
          $(this).tooltip({
              title: "Ex. '45.99' or '46'"
          }).tooltip('show');
      }),
      datepicker: $("#validate_date").datepicker(),    
      
          // issues all ajax calls to server
      issue : function (command, array, Json, cb) {
          var url = command + "?";
          for (var i = 0; i < array.length; i++) {
              if (i !== 0) {
                  url += "&" + array[i][0] + "=" + array[i][1];
              } else {
                  url += array[i][0] + "=" + array[i][1];
              }
          }
          if (Json == null){
            // request is a get
            $.ajax({
              url: url,
              type: 'GET',
              error: function(dat){
                cb(true);
                return
              },
              complete: function(dat){
                cb(null,dat.status,dat.responseText);
                return
              }
            });
          } else {
            $.ajax({
              url: url,
              type: 'POST',
			  contentType: 'application/json',
              data: JSON.stringify(Json),
              error: function(dat){
                cb(true);
                return
              },
              complete: function(dat){
                cb(null,dat.status,dat.responseText);
                return
              }
            }); 
          }   
      }
  }
})();
