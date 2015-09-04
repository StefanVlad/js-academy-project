/* ** Created by stefan.vlad on 9/3/2015. */
export default angular.module('state.category', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("category", {
            url: 'casino/{category}',
            views: {
                header: {
                    templateUrl: require('../partials/header.html')
                },
                content: {
                    templateUrl: require('../casino/casino.html')
                },
                footer: {
                    templateUrl: require('../partials.footer.html')
                }
            }
        })
    }])