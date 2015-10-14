
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
            var interval = "every_minute"
            var timeframe = "hourly"

            // count reports published on s-bahn-muenchen.de
            var count = new Keen.Query("count", {
                eventCollection: "notifications_start",
            });
            client.draw(count, document.getElementById("count"), {
                chartType: "metric",
                title: "Meldungen in diesem Monat",
                colors: ["#49c5b1"]
            });

            // count reports published on s-bahn-muenchen.de
            var averageDelaysToday = new Keen.Query("average", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfDelays"
            });
            client.draw(averageDelaysToday, document.getElementById("averageDelaysToday"), {
                chartType: "metric",
                title: "Minuten",
                colors: ["#49c5b1"]
            });

            // statistics fromm mvv live
            var liveStatistics =   new Keen.Query("average", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfDelays",
                timeframe: "this_2_days",
                interval: "hourly",
                timezone: "UTC"
            });
             client.draw(liveStatistics, document.getElementById("liveStatistics"), {
                chartType: "linechart",
                title: "Durchschnittliche Verspätung",
                colors: ["#49c5b1"],
                height: 400,
                labels: [],
                chartOptions: {
                }
            });
        });
    }]);
