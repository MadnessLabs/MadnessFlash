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
        
        // pick() {
        //     // pick equation type
        //     this.showWelcome = false;
        //     this.equationType = null;
        // }

        // newEquation(type:string) {
        //     this.equationType = type;
        //     var operator = '';
        //     if (type === 'addition') {
        //         operator = '+';
        //         this.answer = this.valueOne + this.valueTwo;
        //     } else if (type === 'subtraction') {
        //         operator = '-';
        //         this.answer = this.valueOne - this.valueTwo;
        //     } else if (type === 'multiplication') {
        //         operator = '*';
        //         this.answer = this.valueOne * this.valueTwo;
        //     } else {
        //         operator = '/';
        //         this.answer = this.valueOne / this.valueTwo;
        //     }
        //     this.equation = this.valueOne + operator + this.valueTwo;
        //     this.valueTwo += 1;

        //     if (this.valueTwo === 13) {
        //         this.valueTwo = 1;
        //         this.valueOne += 1;
        //     }
        // }
        // equationAnswer() {
        //     // answer to equation
        // }
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}