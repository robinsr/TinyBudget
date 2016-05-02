var chart_objects = (function(){
    return {
	
	     // HighCharts object for pie chart
	    pie_chart : {
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false
	        },
	        title: {
	            text: ''

	        },
	        tooltip: {
	            enabled: false
	        },
	        plotOptions: {
	            pie: {
	                animation: true,
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    color: '#000000',
	                    connectorColor: '#000000',
	                    formatter: function () {
	                        return '<b>' + this.point.name + '</b>: $' + this.point.y;
	                    }
	                }
	            }
	        },
	        series: [{
	                type: 'pie',
	                data: [],
	                point: {
	                    events: {
	                        click: function(event){
	                            if (tinybudget.viewmodel.onTour() === 0){
	                                tinybudget.viewmodel.highlightCategory(this.id);
	                            } else {
	                                //console.log("we're still on tour!")
	                            }
	                        }
	                    }
	                }
	            }
	        ]
	    }
	}
})();