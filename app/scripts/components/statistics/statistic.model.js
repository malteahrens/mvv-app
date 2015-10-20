angular.module('angularApp')
.service('StatModel', function() {
    var observerCallbacks = [];
    var registerOberserver = function(callback) {
        console.log("register callback for "+callback.id);
        observerCallbacks.push(callback);
    };
    var notifyObserver = function(value, operation) {
        angular.forEach(observerCallbacks, function(callback) {
            console.log("notify observer "+callback.id+" about change "+operation);
            console.log(value);
            callback.notify(value, operation);
        });
    };
    
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

    var countReports = 0;
    var totalNumberOfDelays = 0;

    var getTotalNumberOfDelays = function() {
        return totalNumberOfDelays;    
    }

    var getCountReports = function(value) {

        return countReports; 
    }

    var setTotalNumberOfDelays = function(value) {
        totalNumberOfDelays = value;
        notifyObserver(totalNumberOfDelays, 'totalNumberOfDelays');
    }

    var setCountReports = function(value) {
        countReports = value;
        notifyObserver(countReports, 'countReports');
    }

    var data = []
    var getData = function() {
        return filter(data);
    }
    var setData = function(dataSet) {
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

    var setInterval = function(interval) {
        console.log(interval);
        notifyObserver(statisticsInterval[interval], 'intervalChange');
    }

    var filter = function(data) {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        return data;
    }

    return {
        registerOberserver: registerOberserver,
        getData: getData,
        setData: setData,
        addData: addData,
        setInterval: setInterval,
        countReports: getCountReports,
        TotalNumberOfDelays: getTotalNumberOfDelays,
        setCountReports: setCountReports,
        setTotalNumberOfDelays: setTotalNumberOfDelays
    };
});
