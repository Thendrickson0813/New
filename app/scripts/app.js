'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angRPGApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase',
        
        // 'Move'
    ])
    .constant('FIREBASE_URL', 'https://crackling-inferno-220.firebaseio.com/')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/splash.html',
                controller: 'splashCtrl'
            })
            .when('/play', {
                templateUrl: 'views/ui.html',
                controller: 'UiMiddleCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthCtrl',
                resolve: {
                    user: function(Auth) {
                        return Auth.resolveUser();
                    }
                }
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthCtrl',
                resolve: {
                    user: function(Auth) {
                        return Auth.resolveUser();
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });