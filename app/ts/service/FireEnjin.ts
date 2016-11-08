/// <reference path="../../typings/index.d.ts"/>

module MadnessFlash {
    class FireEnjinService {
        firebase: any;

        constructor(
            protected Firebase,
            protected Auth
        ) {
            // On Load
            this.Firebase.start();
            this.Auth.start();
        }
    }

    angular.module('MadnessFlash').service('FireEnjin', FireEnjinService);
}
