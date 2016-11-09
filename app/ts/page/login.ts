/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class LoginController {

        constructor(protected enjin, protected $state, protected $rootScope) {
            // ON LOAD 
        }

        login(type) {
            this.enjin.auth.withSocial(type, (user) => {
                console.log(user);
                this.enjin.database.update('user/' + user.user.uid, {
                    provider: type, 
                    name: user.user.displayName,
                    photo: user.user.photoURL
                });
                this.$state.go('home.welcome');
            });
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.LoginController', LoginController);
}