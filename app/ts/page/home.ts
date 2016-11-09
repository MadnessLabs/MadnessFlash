/// <reference path="../../typings/index.d.ts"/>

module MadnessFlash {
    'use strict';

    class HomeController {
        valueOne: number;
        valueTwo: number;
        type: string;
        answer: number;
        guess: any;
        randomize: any;
        user: any;

        constructor(protected $state, protected enjin, protected $scope) {
            // ON LOAD 
            this.reset();

            this.enjin.database.get('user/' + this.enjin.session.user.uid).$bindTo($scope, 'ctrl.user');
            
        }

        setType(type) {
            this.type = type;
            this.enjin.database.update('user/' + this.enjin.session.user.uid, {
                type: type
            });
        }

        makeGuess() {
            if (this.answer === this.guess) {
                if (!this.user.points) {
                    this.user.points = {
                        addition: 0,
                        subtraction: 0,
                        multiplication: 0,
                        division: 0
                    };
                }
                this.user.points[this.type] += 1;
                this.enjin.database.update('user/' + this.enjin.session.user.uid + '/points', this.user.points);
                if (this.user.randomize) {
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
            this.answer = Math.round(number * 1000) / 1000;
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