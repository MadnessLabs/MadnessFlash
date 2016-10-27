/// <reference path="../../typings/index.d.ts"/>
module MadnessFlash {
    'use strict';

    class HomeProfileController {
        popover: any;

        constructor(protected $scope, protected $ionicPopover) {
            // ON LOAD  
            
            this.$ionicPopover.fromTemplateUrl('html/popover/profileLogin.html', {
                scope: this.$scope,
                'backdropClickToClose': true
            }).then((popover) => {
                this.popover = popover;
            });
         
        }

        selectProfilePopover($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.popover.show($event);
        }
    }

    angular.module('MadnessFlash')
           .controller('MadnessFlash.HomeProfileController', HomeProfileController);
}