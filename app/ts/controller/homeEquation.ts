/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeEquationController {
        valueOne: number;
        valueTwo: number;
        equation: string; 
        equationType: string;
        answer: number;

        constructor(protected $stateParams, protected $scope) {
            // ON LOAD 
            console.log($scope);
            this.valueOne = this.$scope.$parent.$parent.ctrl.valueOne;
            this.valueTwo = this.$scope.$parent.$parent.ctrl.valueTwo; 
            this.newEquation(this.$stateParams.type);
        }

        newEquation(type:string) {
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
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomeEquationController', HomeEquationController);
}