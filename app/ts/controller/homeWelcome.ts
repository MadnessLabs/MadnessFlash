/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeWelcomeController {
        message: {
            title: string,
            body?: string
        };

        constructor() {
            // ON LOAD       
            this.message = {
                title: 'Hello There!'
            };  
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomeWelcomeController', HomeWelcomeController);
}