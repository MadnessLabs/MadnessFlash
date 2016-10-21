/// <reference path="../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class MadnessFlashRouter {
        constructor($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {'abstract':true, 
'url':'/home', 
'templateUrl':'html/page/home.html', 
'controller':'MadnessFlash.HomeController as ctrl'})
				.state('home.welcome', {'url':'/welcome', 
'views':{'card':{'templateUrl':'html/page/homeWelcome.html', 
'controller':'MadnessFlash.HomeWelcomeController as welcome'}}})
				.state('home.pick', {'url':'/pick', 
'views':{'card':{'templateUrl':'html/page/homePick.html', 
'controller':'MadnessFlash.HomePickController as ctrl'}}})
				.state('home.profile', {'url':'/profile', 
'views':{'card':{'templateUrl':'html/page/homeProfile.html', 
'controller':'MadnessFlash.HomeProfileController as ctrl'}}});

            $urlRouterProvider.otherwise(function($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('home.welcome');
            });
        }
    }

    angular.module('MadnessFlash')
           .config(MadnessFlashRouter);
}