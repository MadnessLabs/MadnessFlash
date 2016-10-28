/// <reference path="../../typings/index.d.ts"/>
declare var firebase;

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

        constructor(protected $state, protected enjin, protected $scope, $firebaseObject) {
            // ON LOAD 
            this.reset();

            var ref = firebase.database().ref('users/0');
            // download the data into a local object
            var syncObject = $firebaseObject(ref);
            // synchronize the object with a three-way data binding
            // click on `index.html` above to see it used in the DOM!
            syncObject.$bindTo($scope, 'user');

            console.log($scope, this);
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