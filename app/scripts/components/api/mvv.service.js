angular.module('angularApp')
.service('MvvSrvc', [ '$http', '$interval', 'StatModel', 'MapModel', function($http, $interval, StatModel, MapModel) {
    var url = 'https://cors-mvv.herokuapp.com/bin/540/query.exe/dny?look_minx=10744745&look_maxx=12440389&look_miny=47825027&look_maxy=48406811&tpl=trains2json&look_productclass=16&look_json=yes&performLocating=1&look_nv=zugposmode|3|get_ageofreport|yes|get_rtmsgstatus|yes|get_linenumber|no|interval|10000|intervalstep|10000|&unique=1444761619000&';
    var requestLive = function() {
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            var totalLiveDelay = 0;
            for (i = 0; i < response.data.look.trains.length; i++) {
                var delay = parseInt(response.data.look.trains[i].delay);
                totalLiveDelay += delay;
                if(delay > 2) {
                    MapModel.addData(response.data.look.trains[i]);
                }
            }
            var dateTime = new Date();
            StatModel.addData({
                label: +dateTime,
                value: totalLiveDelay
            });
        }, function errorCallback(response) {
            console.log("error");
        });
    } 

    var operations = {
        requestLive: requestLive    
    }

    var stop;
    var startPolling = function(pollingInterval) {
        if ( angular.isDefined(stop) ) return;
        stop = $interval(requestLive, pollingInterval, 100);
    }

    var stopPolling = function() {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
        }
    }

    return {
        startPolling: startPolling,
        stopPolling: stopPolling
    }
}]);
