angular.module('angularApp')
.service('StatSrvc', function() {
    var liveMode = false
    var observerCallbacks = [];
    var registerOberserver = function(callback) {
        observerCallbacks.push(callback);
    };
    var notifyObserver = function(value, operation) {
        angular.forEach(observerCallbacks, function(callback) {
            console.log("notify observer "+callback.id+" about change "+operation);
            console.log(value);
            callback.notify(value, operation);
        });
    };
    var requestLive = function(pollingInterval) {
        notifyObserver(pollingInterval, 'requestLive');    
    }  

    var timeframe = "this_1_day";
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
            pollingInterval: 1000 * 5,
            timeframe: "this_1_hour",
            timeframeName: "Stunde",
            interval: "every_minute"
        }
    };      
    var changeStatInterval = function(interval) {
        notifyObserver(statisticsInterval[interval], 'intervalChange');
    }

    var filter = function(data) {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        return data;
    }
    
    var data = []
    var getData = function() {
        return filter(data);
    }
    var setData = function(dataSet) {
        liveMode = false
        data = dataSet;
        notifyObserver(data, 'dataSet'); 
    }

    var addData = function(dataToAdd) {
        if(!liveMode) {
            liveMode = true;
            data[0].values = [];
        }
        data[0].values.push(dataToAdd);    
        notifyObserver(dataToAdd, 'dataAdd'); 
    }

    return {
        registerOberserver: registerOberserver,
        changeStatInterval: changeStatInterval,
        getData: getData,
        setData: setData,
        addData: addData,
        requestLive: requestLive
    };
});
