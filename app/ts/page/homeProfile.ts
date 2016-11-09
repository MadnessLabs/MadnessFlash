/// <reference path="../../typings/index.d.ts"/>

module MadnessFlash {
    'use strict';

    class HomeProfileController {
        parent: any;

        constructor(
            protected $scope, 
            protected enjin
        ) {
            // ON LOAD 
        }

        logout() {
            this.enjin.auth.logout();
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomeProfileController', HomeProfileController);
}