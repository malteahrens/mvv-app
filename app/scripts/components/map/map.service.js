angular.module('angularApp')
.service('MapSrvc', ['MapModel', function(MapModel) {
    var liveMode = false;
    
    var setLive = function(mode) {
        console.log("set live mode: "+ mode);
        liveMode = mode;
    }

    var getLive = function() {
        return liveMode;
    }

    var setData = function(dataSet) {
        MapModel.setData(dataSet);
    }

    var addData = function(dataToAdd) {
        MapModel.addData(dataToAdd);
    }

    return {
        setData: setData,
        addData: addData,
        setLive: setLive,
        getLive: getLive
    };
}]);
