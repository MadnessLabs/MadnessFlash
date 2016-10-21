/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomePickController {
        equationType: string;
        // showWelcome: boolean;

        constructor() {
            // ON LOAD       
        }

        pick() {
            // pick equation type
            // this.showWelcome = false;
            this.equationType = null;
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomePickController', HomePickController);
}