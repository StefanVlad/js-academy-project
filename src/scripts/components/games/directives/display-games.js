/* ** Created by stefan.vlad on 9/1/2015. */
export default angular.module('games.directive.displayGames', ['games.services.games'])
    .directive('displayGames', ['requestGames', function (){
        return {
            restrict: 'E',
            templateUrl: require('./../views/games.html')
        }
    }])