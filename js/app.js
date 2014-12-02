angular.module('EmailApp', ['ngRoute', 'ngSanitize'])

.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<h1>Email App</h1>'
            })
            .when('/inbox', {
                templateUrl : 'views/inbox.html',
                controller: 'InboxCtrl',
                controllerAs: 'inbox'
            })
            .when('/inbox/email/:id', {
                templateUrl: 'views/email.html',
                controller: 'EmailCtrl',
                controllerAs: 'email'
            })
            .otherwise({
                redirectTo: '/inbox'
            })
    });