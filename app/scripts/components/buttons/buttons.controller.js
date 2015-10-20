angular.module('angularApp')
.controller('ButtonsCtrl', [ '$scope', 'StatModel', function($scope, StatModel) {
    $scope.radioModel = 'monthly';

    $scope.$watch('radioModel', function (newValue, oldValue) {
        StatModel.setInterval(newValue);
    });
}]);
