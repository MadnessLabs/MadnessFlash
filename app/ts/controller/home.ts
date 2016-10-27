/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeController {
        valueOne: number;
        valueTwo: number;
        type: string;
        answer: number;
        guess: number;

        constructor(protected $state) {
            // ON LOAD 
            this.reset(); 
        }

        setType(type) {
            this.type = type;
        }

        makeGuess() {
            if (this.answer === this.guess) {
                this.valueTwo += 1;

                if (this.valueTwo === 13) {
                    this.valueTwo = 1;
                    this.valueOne += 1;
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
    }

    angular.module('MadnessFlash')
        .controller('MadnessFlash.HomeController', HomeController);
}