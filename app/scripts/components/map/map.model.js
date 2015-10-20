angular.module('angularApp')
.service('MapModel', function() {
    var observerCallbacks = [];
    var registerOberserver = function(callback) {
        console.log("registered callback for "+callback.id);
        observerCallbacks.push(callback);
    };
    var notifyObserver = function(value, operation) {
        angular.forEach(observerCallbacks, function(callback) {
            console.log("notify observer "+callback.id+" about change "+operation);
            callback.notify(value, operation);
        });
    };
    
    var data = []
    var getData = function() {
        data;
    }
    var setData = function(dataSet) {
        data = dataSet;
        notifyObserver(data, 'dataSet'); 
    }

    var addData = function(dataToAdd) {
        data.push(dataToAdd);    
        notifyObserver(dataToAdd, 'dataAdd'); 
    }

    return {
        registerOberserver: registerOberserver,
        getData: getData,
        setData: setData,
        addData: addData
    };
});
