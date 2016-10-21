/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeController {
        valueOne: number;
        valueTwo: number;
        equation: string; 
        equationType: string;
        answer: number;

        constructor() {
            // ON LOAD 
            this.valueOne = 1;
            this.valueTwo = 1;   
        }
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}