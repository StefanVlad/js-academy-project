export default angular.module('state.home', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("home", {
            url: '/',
            views: {
                header: {
                    templateUrl: require('../partials/header.html')
                },
                content: {
                    templateUrl: require('./home.html'),
                },
                footer: {
                    templateUrl: require('../partials/footer.html')
                }
            }
        })
    }])