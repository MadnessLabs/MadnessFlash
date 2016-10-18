/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeController {
        valueOne: number;
        valueTwo: number;
        showWelcome: boolean;
        equation: string;
        equationType: string;
        answer: number;

        constructor() {
            // ON LOAD 
            this.valueOne = 1;
            this.valueTwo = 1; 
            this.showWelcome = true;   
        }

        newEquation(type:string) {
            this.equationType = type;
            var operator = '';
            if (type === 'addition') {
                operator = '+';
                this.answer = this.valueOne + this.valueTwo;
            } else if (type === 'subtraction') {
                operator = '-';
                this.answer = this.valueOne - this.valueTwo;
            } else if (type === 'multiplication') {
                operator = '*';
                this.answer = this.valueOne * this.valueTwo;
            } else {
                operator = '/';
                this.answer = this.valueOne / this.valueTwo;
            }
            this.equation = this.valueOne + operator + this.valueTwo + ' = ' + this.answer;
            this.showWelcome = false;
            this.valueTwo += 1;

            if (this.valueTwo === 13) {
                this.valueTwo = 1;
                this.valueOne += 1;
            }
        }
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}