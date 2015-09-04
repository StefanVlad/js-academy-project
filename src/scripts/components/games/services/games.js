/* ** Created by stefan.vlad on 9/1/2015. */
export default angular.module('games.services.games', [])
    .factory('requestGames', ['emWebApi', '$q', '$timeout', function(emWebApi, $q, $timeout) {
    return {
        getGames: function (categ) {
            var deferred = $q.defer();
            if(categ == undefined){
                var params = {
                    expectedFields: 2 + 4 + 8192 + 33554432 + 262144 + 524288 + 65536,
                };
            }
            else{
                var params = {
                    expectedFields: 2 + 4 + 8192 + 33554432 + 262144 + 524288 + 65536,
                    filterByCategory: [categ]
                };
            }
            return emWebApi.call('/casino#getGames', params
            ).then(function (data){
                    var response =  data;
                    $timeout(function (){
                        deferred.resolve(response);
                    }, 250)
                    return deferred.promise;
                });

        }
    }
}])
    .factory('requestVendors', ['emWebApi', function(emWebApi){
    return {
        getVendors: function () {
            return emWebApi.call('/casino#getGameVendors').then(function (list){
                return list;
            })
        }
    }
}])
   .factory('requestCateg', ['emWebApi', function (emWebApi) {
    return {
        getCateg: function() {
            return emWebApi.call('/casino#getGameCategories').then(function (list){
                return list;
            })
        }
    }
}]);