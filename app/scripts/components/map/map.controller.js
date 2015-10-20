angular.module('angularApp')
.controller('MapCtrl', [ '$scope', 'MapModel', function($scope, MapModel) {
	// set up the map
	map = new L.Map('map');

    var accessToken = 'pk.eyJ1IjoiZmxhbWVkIiwiYSI6ImFHcEx0TFUifQ.Z9j42rwRf12ZElzGiTsoFw';
    // Replace 'mapbox.streets' with your map id.
    var osm = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=' + accessToken, {
        attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });
    L.control.fullscreen().addTo(map);

	map.setView(new L.LatLng(48.135125, 11.581981),11);
	map.addLayer(osm);

    $scope.delayPoints = [];

    var heat = L.heatLayer($scope.delayPoints, {maxZoom: 18, radius: 20}).addTo(map);
    var draw = true;

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
    MapModel.registerOberserver(callback);
}]);
