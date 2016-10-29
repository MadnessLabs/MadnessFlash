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
'controller':'MadnessFlash.HomePickController as pick'}}})
				.state('home.profile', {'url':'/profile', 
'views':{'card':{'templateUrl':'html/page/homeProfile.html', 
'controller':'MadnessFlash.HomeProfileController as profile'}}})
				.state('home.equation', {'url':'/equation/:type', 
'views':{'card':{'templateUrl':'html/page/homeEquation.html', 
'controller':'MadnessFlash.HomeEquationController as equation'}}})
				.state('home.answer', {'url':'/answer', 
'views':{'card':{'templateUrl':'html/page/homeAnswer.html', 
'controller':'MadnessFlash.HomeAnswerController as answer'}}})
				.state('login', {'url':'/login', 
'templateUrl':'html/page/login.html', 
'controller':'MadnessFlash.LoginController as ctrl'});

            $urlRouterProvider.otherwise(function($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('home.welcome');
            });
        }
    }

    angular.module('MadnessFlash')
           .config(MadnessFlashRouter);
}