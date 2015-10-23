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
    
    var liveMode = false;
    var timeframe = "this_1_day";
    var countReports = 0;
    var totalNumberOfDelays = 0;
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
        console.log("getData");
        var mindate = new Date(2015,9,20);
        mindate.setTime( mindate.getTime() + mindate.getTimezoneOffset() );
        return filter(data, mindate);
    }
    var setData = function(dataSet) {
        data = dataSet;
        notifyObserver(data, 'dataSet'); 
    }

    var addData = function(dataToAdd) {
        console.log(dataToAdd);        
        data[0].values.push(dataToAdd);    
        //notifyObserver(dataToAdd, 'dataAdd'); 
    }

    var setInterval = function(mode) {
        if(mode === 'live') {
            liveMode=true;
        } else {
            liveMode=false;        
        }
        console.log('interval mode: '+mode); 
        notifyObserver(statisticsInterval[mode], 'intervalChange');
    }

    var filterToggle = false;
    var filter = function(data, mindate) {
        // early exit if filtering is disabled        
        if(!filterToggle) {
            return data;        
        }
        console.log("filter");

        if(liveMode) {
            mindate = new Date();
            mindate.setHours(mindate.getHours() - 1);
        }

        var maxdate = new Date();
        maxdate.setHours(23,59,0,0);
        console.log(maxdate);
        var result = [];
        result[0] = {
            key: 'abc',
            values: []            
        }
        if(data.length>0) {
            for(var i=0; i<data[0].values.length; i++) {
                if(mindate.getTime() < data[0].values[i].label && maxdate.getTime() > data[0].values[i].label) {  
                    result[0].values.push({
                        label: data[0].values[i].label,
                        value: data[0].values[i].value
                    });
                }
            }    
        }
        return result;
    };

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
