/* ---------------------------------------------PRODUCT---------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
require("../../bower_components/angular-ui-router/release/angular-ui-router")

var app = angular.module('emJsAcademy', [
    require('./components').name,
    require('./states').name
]).config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/404');
}).run(function ($state, $rootScope, emWebApi) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.error('$stateChangeError', event, toState, toParams, fromState, fromParams)
    });
});

/* ---Service requestGames--- */
//app.factory('requestGames', ['emWebApi', '$q', '$timeout', function(emWebApi, $q, $timeout) {
//    return {
//        getGames: function (categ) {
//            var deferred = $q.defer();
//            if(categ == undefined){
//                console.log('category is undefined');
//                var params = {
//                    expectedFields: 2 + 4 + 8192 + 33554432 + 262144 + 524288 + 65536,
//                };
//            }
//            else{
//                console.log('category is: ', categ);
//                var params = {
//                    expectedFields: 2 + 4 + 8192 + 33554432 + 262144 + 524288 + 65536,
//                    filterByCategory: [categ]
//                };
//            }
//            return emWebApi.call('/casino#getGames', params
//            ).then(function (data){
//                var response =  data;
//                $timeout(function (){
//                    deferred.resolve(response);
//                }, 1000)
//               return deferred.promise;
//            });
//
//        }
//    }
//}])
//
//
//app.factory('requestVendors', ['emWebApi', function(emWebApi){
//    return {
//        getVendors: function () {
//            return emWebApi.call('/casino#getGameVendors').then(function (list){
//                return list;
//            })
//        }
//    }
//}]);
//
//app.factory('requestCateg', ['emWebApi', function (emWebApi) {
//    return {
//        getCateg: function() {
//            return emWebApi.call('/casino#getGameCategories').then(function (list){
//                return list;
//            })
//        }
//    }
//}]);


/*  ---Controller--- */
//app.controller('MainController', ['$scope', 'requestGames', 'requestVendors', 'requestCateg','$window', function($scope, requestGames, requestVendors, requestCateg, $window){
//    $scope.gamesList = [];
//    $scope.vendorList = [];
//    $scope.gameCateg = [];
//    requestGames.getGames().then(function(data){
//        $scope.gamesList = data.games;
//        console.log('gamesList: ', $scope.gamesList);
//        $scope.$apply();
//    });
//    requestVendors.getVendors().then(function(data){
//        $scope.vendorList = data.vendors;
//        console.log('vendorList: ', $scope.vendorList);
//        $scope.$apply();
//    });
//    requestCateg.getCateg().then(function(data){
//        $scope.gameCateg = data.categories;
//        console.log('gameCateg', $scope.gameCateg);
//        $scope.$apply();
//    })
//
//    $scope.testfunc = function(param){
//        $scope.gamesList = [];
//        requestGames.getGames(param).then(function(data){
//            $scope.gamesList = data.games;
//            console.log('gamesList: ', $scope.gamesList);
//            $scope.$apply();
//        });
//    }
//    $scope.openGame = function(param) {
//        $window.location.href = param
//    };
//
//    //$scope.addPage = function(){
//    //    $scope.gamesList.currentPageIndex += 1;
//    //    requestGames.getGames($scope.gamesList.currentPageIndex).then(function(data){
//    //        for (var i = 0; i < data.games.length; i++){
//    //            $scope.gamesList.games.push(data.games[i]);
//    //            $scope.$apply();
//    //        }
//    //        console.log('Button was clicked')
//    //    })
//    //    console.log('New gamesList is: ', $scope.gamesList);
//    //};
//
//}]);


/* ---Directive--- */
//app.directive('displayGames', ['requestGames', function (){
//    return {
//        restrict: 'E',
//        templateUrl: require('./components/games/views/games.html')
//    }
//}])


window.global = {};

