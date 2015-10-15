angular.module('angularApp')
.service('StatSrvc', function() {
    var observerCallbacks = [];
    //register an observer
    var registerOberserver = function(callback) {
        observerCallbacks.push(callback);
    };

    var notifyObserver = function(value) {
        angular.forEach(observerCallbacks, function(callback){
            callback.notify(value);
        });
    };

    var statisticsInterval = {
        'monthly': {
            timeframe: "this_1_month",
            timeframeName: "Monat",
            interval: "every_day"
        },
        "dayly": {
            timeframe: "this_1_day",
            timeframeName: "Heute",
            interval: "every_hour"            
        },
        "hourly": {
            timeframe: "this_1_hour",
            timeframeName: "Stunde",
            interval: "every_minute"
        },
        "live" : {
            pollingInterval: 1000 * 30
        }
    };      

    var changeStatInterval = function(interval) {
        notifyObserver(statisticsInterval[interval]);
    }
    
    return {
        changeStatInterval: changeStatInterval,
        registerOberserver: registerOberserver,
        query: function() {
            console.log("test");
        }
    };
});
