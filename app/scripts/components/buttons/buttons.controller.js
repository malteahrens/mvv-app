angular.module('angularApp')
.controller('ButtonsCtrl', [ '$scope', function($scope) {
    $scope.radioModel = 'Middle';

    $scope.$watchCollection('radioModel', function () {
        console.log("value changed");
    });

    var callback = {
        id: 'map.service.js',
        notify: function(value, operation) {
            var x = parseInt(value.x)/1000000;
            var y = parseInt(value.y)/1000000;
            $scope.delayPoints.push(new L.LatLng(y, x, value.delay));
            if($scope.delayPoints.length > 500) {
                console.log("shift");
                $scope.delayPoints.shift();
            }            
            heat.redraw();
        }   
    }
    //MapModel.registerOberserver(callback);
}]);
