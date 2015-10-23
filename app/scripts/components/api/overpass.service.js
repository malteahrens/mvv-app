angular.module('angularApp')
.service('OverpassSrvc', [ '$http', '$interval', 'StatModel', 'MapModel', function($http, $interval, StatModel, MapModel) {
    // https://nominatim.openstreetmap.org/search?X-Requested-With=overpass-turbo&format=json&q=Haberlandstr    
    var url = 'http://nominatim.openstreetmap.org/search?';
    //X-Requested-With=overpass-turbo&
    //format=json&
    //q=Ridgefield+Connecticut'
}]);
