/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeController {
        type: string;

        constructor() {
            // ON LOAD 
              
        }

        setType(type) {
            this.type = type;
        }
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}