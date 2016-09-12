/**
 * Created by lihl on 16-6-13.
 */
(function() {
    'use strict';

    angular.module('MyApp',['ngMaterial', 'ngMessages'])
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope) {
        $scope.currentNavItem = 'page1';
    }
})();
