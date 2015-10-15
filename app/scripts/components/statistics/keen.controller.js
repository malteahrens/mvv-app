
angular.module('angularApp')
    .controller('KeenCtrl', [ '$scope', '$http', '$interval', 'StatSrvc', function($scope, $http, $interval, StatSrvc) {
        $scope.interval = "every_hour";
        $scope.timeframe = "this_1_day";
        $scope.timeframeName = "Heute";     

        var client = new Keen({
            projectId: "561925d196773d74b138cefd", // String (required always)
            readKey: "363fa49e3c02ebb483fb0dd2f219a9347243c32562720fd877abd34e206a545bb7923dc478beb1f18be28ab3459338b41946d3288768d6e33b8c883c8592cc3b439dc09330b6f7a1f27e1a9c152db2079ede12b53204e91e547350dcf02fdd7abcd671dc0291a68d94f2798639e40a89",   // String (required for querying data)
            protocol: "https",                  // String (optional: https | http | auto)
            host: "api.keen.io/3.0",            // String (optional)
            requestType: "jsonp"                // String (optional: jsonp, xhr, beacon)
        });
        $scope.totalLiveDelay = 0;

        Keen.ready(function(){
            var chart_reports = new Keen.Dataviz();
            chart_reports
              .el(document.getElementById("countReports"))
              .colors(["#49c5b1"])
              .title("∑ Meldungen / "+$scope.timeframeName)
              .prepare();
            var query_reports = new Keen.Query("count", {
                eventCollection: "notifications_start",
                timeframe: $scope.timeframe
            });
            var req_reports = client.run(query_reports, function(err, res){
            if (err) {
                chart_reports.error(err.message);
            }
            else {
            chart_reports
                .parseRequest(this)
                .render();
            }
            });

            var chart_delays = new Keen.Dataviz();
            chart_delays
                .el(document.getElementById("averageDelays"))
                .colors(["#49c5b1"])
                .title("Ø Minuten / "+$scope.timeframeName)
                .prepare();
            var query_delays = new Keen.Query("average", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfDelays",
                timeframe: $scope.timeframe,
                timezone: "UTC"
            });
            var req_delays = client.run(query_delays, function(err, res){
                if (err) {
                    chart_reports.error(err.message);
                }
                else {
                chart_delays
                  .parseRequest(this)
                  .render();
                }
            });

            // statistics from mvv live
            var liveDelays = new Keen.Query("median", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfDelays",
                timeframe: $scope.timeframe,
                interval: "hourly",
                timezone: "UTC"
            });

            var liveTrains = new Keen.Query("median", {
                eventCollection: "statistics",
                targetProperty: "totalNumberOfTrains",
                timeframe: $scope.timeframe,
                interval: "hourly",
                timezone: "UTC"
            });

            var chart_live = new Keen.Dataviz()
            .el(document.getElementById('liveStatistics'))
            .colors(["#49c5b1", "#ff0000", "#0000ff"])
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

            var req_live = client.run([liveDelays, liveTrains], function(error, response){ // run the queries
                var result1 = response[0].result  // data from first query
                var result2 = response[1].result  // data from second query
                var data = []  // place for combined results
                var i=0

                while (i < result1.length) {

                    data[i]={ // format the data so it can be charted
                        timeframe: result1[i]["timeframe"],
                        value: [
                            { category: "∑ Verspätungen in Minuten", result: result1[i]["value"] },
                            { category: "∑ Züge", result: result2[i]["value"] },
                            { category: "Ø Verspätung / Zug", result: result1[i]["value"]/result2[i]["value"] }
                        ]
                    }
                    if (i == result1.length-1) { // chart the data
                        chart_live
                          .data({result: data})
                          .render();
                    }
                    i++;
                }
            });

        var requestLive = function() {
            var url = 'https://cors-mvv.herokuapp.com/bin/540/query.exe/dny?look_minx=10744745&look_maxx=12440389&look_miny=47825027&look_maxy=48406811&tpl=trains2json&look_productclass=17&look_json=yes&performLocating=1&look_nv=zugposmode|3|get_ageofreport|yes|get_rtmsgstatus|yes|get_linenumber|no|interval|10000|intervalstep|10000|&unique=1444761619000&';
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                var totalLiveDelay = 0;
                for (i = 0; i < response.data.look.trains.length; i++) {
                    totalLiveDelay += parseInt(response.data.look.trains[i].delay);
                }
                chart_delays.data({ result: totalLiveDelay });
                chart_delays.title("Ø Minuten / Jetzt");
                chart_delays.render();
                $scope.totalLiveDelay = totalLiveDelay;
            }, function errorCallback(response) {
                console.log("error");
            });
        }

            var callback = {
                notify: function(value) {
                    if(value.pollingInterval) {
                        $interval(requestLive, value.pollingInterval);
                    }
                    else {
                        $scope.interval = value.interval;
                        $scope.timeframe = value.timeframe;
                        $scope.timeframeName = value.timeframeName;

                        query_reports.set({timeframe: value.timeframe});
                        chart_reports.title("∑ Meldungen / "+value.timeframeName);
                        req_reports.refresh();

                        query_delays.set({timeframe: value.timeframe});
                        chart_delays.title("Ø Minuten / "+value.timeframeName);
                        req_delays.refresh();

                        liveDelays.set({timeframe: value.timeframe});
                        liveTrains.set({timeframe: value.timeframe});
                        chart_live.title("Zeitlicher Verlauf - "+value.timeframeName);
                        req_live.refresh();
                    }
                }   
            }
            StatSrvc.registerOberserver(callback);
        });
    }]);
