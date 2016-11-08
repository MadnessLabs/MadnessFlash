/// <reference path="../../typings/index.d.ts"/>

module MadnessFlash {
    class AuthService {
        pause: boolean;
        unwatch: any;

        constructor(
            protected enjin, 
            protected $http,
            protected $state, 
            protected $rootScope,
            protected Firebase,
            protected $filter,
            protected $firebaseAuth,
            protected $cordovaOauth
        ) {
            this.restoreSession();
            $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
                if (error === 'AUTH_REQUIRED') {
                    this.$state.go('login');
                } else {
                    throw error;
                }
            });
        }

        start() {
            this.enjin.auth = {
                instance: this.$firebaseAuth(),
                withSocial: this.withSocial.bind(this),
                setSession: this.restoreSession.bind(this),
                withEmail: this.withEmail.bind(this),
                logout: this.logout.bind(this)
            };
        }

        tokenLogin(credential, callback) {
            this.enjin.auth.instance.$signInWithCredential(credential).then((firebaseUser) => {
                this.setSession(firebaseUser, callback);
            }).catch((error) => {
                console.log('Authentication failed:', error);
            });
        }

        withSocial(type, callback) {
            if (window.cordova) {
                if (type === 'google') {
                    this.$cordovaOauth.google(this.enjin.google.id, ['email'], {
                        redirect_uri: this.enjin.oauthCallback
                    }).then((result) => {
                        this.tokenLogin(firebase.auth.GoogleAuthProvider.credential(result.id_token), callback);
                    });
                } else if (type === 'facebook') {
                    this.$cordovaOauth.facebook(this.enjin.facebook.id, ['email'], {
                        redirect_uri: this.enjin.oauthCallback
                    }).then((result) => {
                        this.tokenLogin(firebase.auth.FacebookAuthProvider.credential(result.access_token), callback);
                    });
                } else if (type === 'twitter') {
                    this.$cordovaOauth.twitter(this.enjin.twitter.id, this.enjin.twitter.secret, {
                        redirect_uri: this.enjin.oauthCallback
                    }).then((result) => {
                        this.tokenLogin(
                            firebase.auth.TwitterAuthProvider.credential(result.oauth_token, result.oauth_token_secret), 
                            callback
                        );
                    });
                } else if (type === 'github') {
                    this.$cordovaOauth.github(this.enjin.github.id, this.enjin.github.secret, ['email'], {
                        redirect_uri: this.enjin.oauthCallback
                    }).then((result) => {
                        this.tokenLogin(firebase.auth.GithubAuthProvider.credential(result.access_token), callback);
                    });
                }
            } else {
                this.enjin.auth.instance.$signInWithPopup(type).then((firebaseUser) => {
                    this.setSession(firebaseUser, callback);
                }).catch((error) => {
                    console.log('Authentication failed:', error);
                });
            }
        }

        withEmail(email, password, callback) {
            this.enjin.auth.instance.$signInWithEmailAndPassword(email, password).then((firebaseUser) => {
                this.setSession(firebaseUser, callback);
            });
        }

        restoreSession() {
            if (!this.enjin.session && localStorage.getItem(this.enjin.name + 'Session')) {
                this.setSession(JSON.parse(localStorage.getItem(this.enjin.name + 'Session')));
            }
        }

        setSession(user, callback = null) {
            if (user) {
                this.enjin.session = this.$rootScope.session = user;
                localStorage.setItem(this.enjin.name + 'Session', JSON.stringify(this.enjin.session));    
                if (callback && typeof callback === 'function') {
                    callback(user);
                }    
            }
        }

        logout() {
            if (confirm('Are you sure you wish to log out?')) {
                this.enjin.auth.instance.$signOut();
                this.$state.go('login');
                localStorage.clear();
                delete this.enjin.session;
            }
        } 
    } 

    angular.module('MadnessFlash').service('Auth', AuthService);
}