/// <reference path="../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class MadnessFlashRouter {
        constructor($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {'url':'/home', 
'templateUrl':'html/page/home.html', 
'controller':'MadnessFlash.HomeController as ctrl'});

            $urlRouterProvider.otherwise(function($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('home');
            });
        }
    }

    angular.module('MadnessFlash')
           .config(MadnessFlashRouter);
}