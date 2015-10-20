angular.module('angularApp')
.factory('GlueSrvc', function($rootScope) {
    var requestLive = function(pollingInterval) {
        console.log("inside glue service");
        $rootScope.$broadcast("requestLive", pollingInterval);
    }    
    
    return {
        requestLive: requestLive    
    }
});
