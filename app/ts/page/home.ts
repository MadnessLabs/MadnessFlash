/// <reference path="../../typings/index.d.ts"/>

module MadnessFlash {
    'use strict';

    class HomeController {
        valueOne: number;
        valueTwo: number;
        type: string;
        answer: number;
        guess: number;
        randomize: any;
        user: any;

        constructor(protected $state, protected enjin, protected $scope) {
            // ON LOAD 
            this.reset();
            
            this.enjin.database.get('users/0').$bindTo($scope, 'ctrl.user');
        }

        setType(type) {
            this.type = type;
        }

        makeGuess() {
            if (this.answer === this.guess) {
                if (this.$scope.user.randomize) {
                    // this.valueOne = random number
                    this.valueOne = this.randomNumber();
                    this.valueTwo = this.randomNumber();
                } else {
                    this.valueTwo += 1;

                    if (this.valueTwo === 13) {
                        this.valueTwo = 1;
                        this.valueOne += 1;
                    }
                }
                
                this.$state.go('home.answer');
                this.guess = null;
                
            } else {
                alert('Try again!'); 
            }     
        }

        setAnswer(number) {
            this.answer = number;
        }

        reset() {
            this.valueOne = 1;
            this.valueTwo = 1;
        }

        randomNumber() {
            return Math.floor(Math.random() * 12);
        }
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}