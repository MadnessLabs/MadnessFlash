/// <reference path="../../typings/index.d.ts"/>

module MadnessFlash {
    'use strict';

    class HomeProfileController {

        constructor(
            protected $scope, 
            protected enjin
        ) {
            // ON LOAD 
         
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomeProfileController', HomeProfileController);
}