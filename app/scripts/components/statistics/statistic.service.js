angular.module('angularApp')
.service('StatSrvc', [ 'StatModel', function(StatModel) {
    var requestLive = function(pollingInterval) {
        notifyObserver(pollingInterval, 'requestLive');    
    }  

    return {
        requestLive: requestLive
    }
}]);
