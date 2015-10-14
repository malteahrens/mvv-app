
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

            var chart = new Keen.Dataviz();
            chart
              .el(document.getElementById("count"))
              .colors(["#49c5b1"])
              .title("Meldungen heute")
              .prepare();

            var query = new Keen.Query("count", {
                eventCollection: "notifications_start",
                timeframe: "this_1_days"
            });

            var req = client.run(query, function(err, res){
              if (err) {
                chart.error(err.message);
              }
              else {
                chart
                  .parseRequest(this)
                  .title("Meldungen in diesem Monat")
                  .render();
              }
            });
            setInterval(function() {
                req.refresh();
              }, 1000 * 60 * 15);


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

            // statistics from mvv live
            var liveDelays = new Keen.Query("median", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfDelays",
                timeframe: "this_2_days",
                interval: "hourly",
                timezone: "UTC"
            });

            var liveTrains = new Keen.Query("median", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfTrains",
                timeframe: "this_2_days",
                interval: "hourly",
                timezone: "UTC"
            });

            viz = new Keen.Dataviz()
            .el(document.getElementById('liveStatistics'))
            .colors(["#49c5b1", "#ff0000"])
            .height(300)
            .chartType("linechart")
            .chartOptions({
                legend:'bottom', 
                curveType: 'function',
                chartArea: {
                    width: '85%',
                    height: '80%'
                }
            })
            .prepare();

            client.run([liveDelays, liveTrains], function(error, response){ // run the queries
                var result1 = response[0].result  // data from first query
                var result2 = response[1].result  // data from second query
                var data = []  // place for combined results
                var i=0

                while (i < result1.length) {

                    data[i]={ // format the data so it can be charted
                        timeframe: result1[i]["timeframe"],
                        value: [
                            { category: "∑ Verspätungen in Minuten", result: result1[i]["value"] },
                            { category: "∑ Züge", result: result2[i]["value"] }
                        ]
                    }
                    if (i == result1.length-1) { // chart the data

                       viz
                          .data({result: data})
                          .render();
                    }
                    i++;
                }
            });
        });
    }]);
