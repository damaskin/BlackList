/**
 * Created by Ivan on 03.04.2015.
 */

BlackList.controller('BlackListCtrl', ['$scope', '$http', function($scope, $http){
    $scope.name = 'Home';

    $http.get('objects/blacklist.json').success(function(data){
        $scope.blacklist = data;
    })
}]);

BlackList.controller('AboutCtrl', ['$scope', '$http', function($scope, $http){
    $scope.name = 'About';
}]);

BlackList.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
    $scope.name = 'Contact';
}]);