
angular.module('angularApp')
    .controller('KeenCtrl', [ '$scope', function($scope) {
        var client = new Keen({
        	projectId: "561925d196773d74b138cefd", // String (required always)
    		readKey: "363fa49e3c02ebb483fb0dd2f219a9347243c32562720fd877abd34e206a545bb7923dc478beb1f18be28ab3459338b41946d3288768d6e33b8c883c8592cc3b439dc09330b6f7a1f27e1a9c152db2079ede12b53204e91e547350dcf02fdd7abcd671dc0291a68d94f2798639e40a89",   // String (required for querying data)
            protocol: "https",                  // String (optional: https | http | auto)
            host: "api.keen.io/3.0",            // String (optional)
            requestType: "jsonp"                // String (optional: jsonp, xhr, beacon)
        });


        Keen.ready(function(){
        	var count = new Keen.Query("count", {
			  eventCollection: "notifications_start"
			});
			client.draw(count, document.getElementById("count"), {
			  chartType: "metric",
			  title: "Ausfälle in diesem Monat",
			  colors: ["#49c5b1"]
			});
	  	});
}]);
