/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class LoginController {
        auth: any;

        constructor($firebaseAuth, protected enjin, protected $state, protected $rootScope) {
            // ON LOAD 

            this.auth = $firebaseAuth();   
            
                     
        }

        login(loginProvider) {
            this.auth.$signInWithPopup(loginProvider).then((firebaseUser) => {
                this.enjin.session = firebaseUser.user;
                this.$rootScope.isAuthenticated = true;
                this.$state.go('home.welcome');
            }).catch((error) => {
                console.log('Authentication failed:', error);
            });
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.LoginController', LoginController);
}