/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeEquationController {
        valueOne: number;
        valueTwo: number;
        equation: string; 
        equationType: string;
        answer: number;
        parent: any;

        constructor(protected $stateParams, protected $scope) {
            // ON LOAD 
            this.parent = this.$scope.$parent.$parent.ctrl;
            this.valueOne = this.parent.valueOne;
            this.valueTwo = this.parent.valueTwo; 
            this.newEquation(this.$stateParams.type);
        }

        newEquation(type:string) {
            this.parent.setType(type);
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
            this.equation = this.valueOne + operator + this.valueTwo;
            this.parent.setAnswer(this.answer);
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomeEquationController', HomeEquationController);
}