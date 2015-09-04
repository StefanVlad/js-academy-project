/* ** Created by stefan.vlad on 8/31/2015. */
export default angular.module('games.controller.games', ['games.directive.displayGames'])
    .controller('MainController', ['$scope', 'requestGames', 'requestVendors', 'requestCateg','$window', function($scope, requestGames, requestVendors, requestCateg, $window){
        $scope.gamesList = [];
        $scope.vendorList = [];
        $scope.gameCateg = [];
        requestGames.getGames().then(function(data){
            $scope.gamesList = data.games;
            console.log('gamesList: ', $scope.gamesList);
            $scope.$apply();
        });
        requestVendors.getVendors().then(function(data){
            $scope.vendorList = data.vendors;
            console.log('vendorList: ', $scope.vendorList);
            $scope.$apply();
        });
        requestCateg.getCateg().then(function(data){
            $scope.gameCateg = data.categories;
            console.log('gameCateg', $scope.gameCateg);
            $scope.$apply();
        })

        $scope.testfunc = function(param){
            $scope.gamesList = [];
            requestGames.getGames(param).then(function(data){
                $scope.gamesList = data.games;
                console.log('gamesList: ', $scope.gamesList);
                $scope.$apply();
            });
        }
        $scope.openGame = function(param) {
            $window.location.href = param
        };

        //$scope.addPage = function(){
        //    $scope.gamesList.currentPageIndex += 1;
        //    requestGames.getGames($scope.gamesList.currentPageIndex).then(function(data){
        //        for (var i = 0; i < data.games.length; i++){
        //            $scope.gamesList.games.push(data.games[i]);
        //            $scope.$apply();
        //        }
        //        console.log('Button was clicked')
        //    })
        //    console.log('New gamesList is: ', $scope.gamesList);
        //};

    }]);