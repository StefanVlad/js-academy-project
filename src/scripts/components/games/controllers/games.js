/* ** Created by stefan.vlad on 8/31/2015. */
export default angular.module('games.controller.games', ['games.directive.displayGames'])
    .controller('MainController', ['$scope', 'requestGames', 'requestVendors', 'requestCateg','$window', function($scope, requestGames, requestVendors, requestCateg, $window){
        $scope.gamesList = [];
        $scope.vendorList = [];
        $scope.gameCateg = [];
        requestGames.getGames().then(function(data){
            $scope.gamesList = data.games;
            $scope.$apply();
        });
        requestVendors.getVendors().then(function(data){
            $scope.vendorList = data.vendors;
            $scope.$apply();
        });
        requestCateg.getCateg().then(function(data){
            $scope.gameCateg = data.categories;
            $scope.$apply();
        })

        $scope.testfunc = function(param){
            $scope.gamesList = [];
            requestGames.getGames(param).then(function(data){
                $scope.gamesList = data.games;
                $scope.$apply();
            });
        }
        $scope.openGame = function(param) {
            $window.location.href = param
        };
            }]);