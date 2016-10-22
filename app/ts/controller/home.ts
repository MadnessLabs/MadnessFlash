/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeController {
        valueOne: number;
        valueTwo: number;
        type: string;
        answer: number;
        

        constructor() {
            // ON LOAD 
            this.reset(); 
        }

        setType(type) {
            this.type = type;
        }

        setAnswer(number) {
            this.answer = number;
            this.valueTwo += 1;

            if (this.valueTwo === 13) {
                this.valueTwo = 1;
                this.valueOne += 1;
            }
        }

        reset() {
            this.valueOne = 1;
            this.valueTwo = 1;
        }
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}