/* ** Created by stefan.vlad on 9/1/2015. */
export default angular.module("casino", [
    require ('./controllers/games').name,
    require ('./directives/display-games').name,
    require ('./services/games').name
])