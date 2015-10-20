angular.module('angularApp')
.controller('KeenCtrl', [ '$scope', '$http', '$interval', 'StatSrvc', '$filter', 'MvvSrvc', function($scope, $http, $interval, StatSrvc, $filter, MvvSrvc) {
    $scope.interval = "every_hour";
    $scope.timeframe = "this_1_day";
    $scope.timeframeName = "Heute";     
    $scope.totalLiveDelay = 0;
    $scope.changeStatInterval = function(intervalId) {
        StatSrvc.changeStatInterval(intervalId);
    }

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
        $scope.countReports = "~ ~ ~"
        $scope.totalNumberOfDelays = "~ ~ ~"
        $http(req).success(function(data, status) {
            if(query.id === 'reportQuery') {
                $scope.countReports = data.result;
            }
            if(query.id === 'delaysQuery') {
                $scope.totalNumberOfDelays = data.result;
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
                        StatSrvc.setData([{
                            key: "∑ Verspätungen in Minuten",
                            values: values
                        }]);
                    }
                    i++;
                }           
            }
        });
    }
    var reportQuery = {
        id: 'reportQuery',
        operation: "count",
        event_collection: "notifications_start",
        timeframe: $scope.timeframe,
        timezone: "UTC"
    }
    var delaysQuery = {
        id: 'delaysQuery',
        operation: "count",
        event_collection: "statistics",
        target_property:  "totalNumberOfDelays",
        timeframe: $scope.timeframe,
        timezone: "UTC"
    }
    requestKeen(reportQuery);
    requestKeen(delaysQuery);

    var liveDelays = {
        id: 'liveDelaysQuery',
        operation: 'median',
        method: 'set',
        event_collection: "statistics",
        target_property: "totalNumberOfDelays",
        timeframe: $scope.timeframe,
        interval: "hourly",
        timezone: "UTC"
    }
    requestKeen(liveDelays);

    var liveTrains = {
        id: 'liveTrainsQuery',
        operation: 'median',
        event_collection: "statistics",
        target_property: "totalNumberOfTrains",
        timeframe: $scope.timeframe,
        interval: "hourly",
        timezone: "UTC"
    }

    $scope.data = StatSrvc.getData();
    $scope.options = {
        chart: {
            type: 'lineChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 55
            },
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            transitionDuration: 500,
            useInteractiveGuideline: true,
            xAxis: {
                axisLabelDistance: 30,
                tickFormat: function(d){
                    return d3.time.format('%H:%M')(new Date(d));
                }
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 30
            }
        }
    }    

    var callback = {
        id: 'keen.controller.js',
        notify: function(value, operation) {
            if(operation === 'dataSet') {
                // based on plunker http://plnkr.co/edit/AwkX2FW0GGMzwplyTQMS
	            $scope.data.length = 0;
	            Array.prototype.push.apply($scope.data, StatSrvc.getData());
            }
            if(operation === 'dataAdd') {
                //$scope.data[0].values.push(value);  
            }
            if(value.pollingInterval) {
                MvvSrvc.startPolling(value.pollingInterval);
            }
            else {
                $scope.interval = value.interval;
                $scope.timeframe = value.timeframe;
                $scope.timeframeName = value.timeframeName;

                //reportQuery.timeframe = value.timeframe;
                //delaysQuery.timeframe = value.timeframe;
                //requestKeen(reportQuery);
                //requestKeen(delaysQuery);
            }
        }   
    }
    StatSrvc.registerOberserver(callback);
}]);
