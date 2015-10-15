angular.module('angularApp')
.controller('StatCtrl', [ '$scope', '$http', 'StatSrvc', function($scope, $http, StatSrvc) {
    var callback = {
        notify: function(value) {
            console.log("controller");
            console.log(value); 
        }   
    }
    StatSrvc.registerOberserver(callback);

    $scope.changeStatInterval = function(interval) {
        StatSrvc.changeStatInterval(interval);
    }
}]);
