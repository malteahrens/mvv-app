angular.module('angularApp')
.service('KeenSrvc', [ '$http', '$interval', 'StatModel', function($http, $interval, StatModel) {
    var clientProperties = {
        projectId: "561925d196773d74b138cefd", // String (required always)
        readKey: "363fa49e3c02ebb483fb0dd2f219a9347243c32562720fd877abd34e206a545bb7923dc478beb1f18be28ab3459338b41946d3288768d6e33b8c883c8592cc3b439dc09330b6f7a1f27e1a9c152db2079ede12b53204e91e547350dcf02fdd7abcd671dc0291a68d94f2798639e40a89",   // String (required for querying data)
        protocol: "https",                  // String (optional: https | http | auto)
        host: "api.keen.io/3.0"
    };

    var requestKeen = function(query) {
        var req = {
            method: 'POST',
            url: clientProperties.protocol+'://'+clientProperties.host+'/projects/'+clientProperties.projectId+'/queries/'+query.operation,
            headers: {
               'Authorization': clientProperties.readKey
             },
             data: query
        }
        $http(req).success(function(data, status) {
            if(query.id === 'reportQuery') {
                StatModel.setCountReports(data.result);
            }
            if(query.id === 'delaysQuery') {
                StatModel.setTotalNumberOfDelays(data.result);
            }
            if(query.id === 'liveDelaysQuery') {
                var i=0
                var values = [];
                while (i < data.result.length) {
                    if(data.result[i].value != null) {
                        var format = d3.time.format("%Y-%m-%d");
                        var dateTime = new Date(data.result[i]["timeframe"].start)
                        values.push({label: +dateTime, value: data.result[i]["value"]})
                    }
                    if (i == data.result.length-1) { // chart the data
                        StatModel.setData([{
                            key: "∑ Verspätungen in Minuten",
                            values: values
                        }]);
                    }
                    i++;
                }           
            }
        });
    }

    var stop;
    var startPolling = function(query, pollingInterval) {
        if ( angular.isDefined(stop) ) return;
        stop = $interval(requestKeen, pollingInterval, 100);
    }

    var stopPolling = function(query) {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
        }
    }

    return {
        startPolling: startPolling,
        stopPolling: stopPolling,
        execute: requestKeen
    }
}]);
