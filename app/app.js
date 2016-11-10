var LunTest = angular.module('LunTest', ['AppEnums', 'ui.router', 'LocalStorageModule', 'ngRoute'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        var defaultPath = '';

        $urlRouterProvider.otherwise(defaultPath);
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('basic', {
                url: defaultPath + '/',
                templateUrl: 'app/routes/Info/Info.html',
                controller: 'InfoController',
                controllerAs: 'ctrl',
                data: {
                    pageTitle: 'Info',
                    state: 1,
                    description: '1. Введите имя и e-mail'
                },
                resolve: {}
            }).state('geo', {
                url: defaultPath + '/geo',
                templateUrl: 'app/routes/Geo/Geo.html',
                controller: 'GeoController',
                controllerAs: 'ctrl',
                data: {
                    pageTitle: 'Geo Info',
                    state: 2,
                    description: '2. Выберите страну и город'
                },
                resolve: {}
            }).state('social', {
                url: defaultPath + '/social',
                templateUrl: 'app/routes/Social/Social.html',
                controller: 'SocialController',
                controllerAs: 'ctrl',
                data: {
                    pageTitle: 'Social Info',
                    state: 3,
                    description: '3. Отметьте социальные сети'
                },
                resolve: {}
            }).state('animal', {
                url: defaultPath + '/animal',
                templateUrl: 'app/routes/Animal/Animal.html',
                controller: 'AnimalController',
                controllerAs: 'ctrl',
                data: {
                    pageTitle: 'Animal Info',
                    state: 4,
                    description: '4. Выберите любимого котика'

                },
                resolve: {}
            }).state('summary', {
                url: defaultPath + '/summary',
                templateUrl: 'app/routes/Summary/Summary.html',
                controller: 'SummaryController',
                controllerAs: 'ctrl',
                data: {
                    pageTitle: 'Summary',
                    state: 5
                },
                resolve: {}
            });
    }])
    .run(['$rootScope', 'localStorageService', function($rootScope, localStorageService) {
        var finishedSteps = localStorageService.get('finishedSteps');
        if (finishedSteps && finishedSteps.length > 0) {
            $rootScope.finishedSteps = finishedSteps;
        } else {
            $rootScope.finishedSteps = [0];
        }

        var localStorageUser = localStorageService.get('user');
        if (localStorageUser) {
            $rootScope.user = localStorageUser;
        } else {
            $rootScope.user = {};
        }
        $rootScope.steps = {
            1: 'basic',
            2: 'geo',
            3: 'social',
            4: 'animal',
            5: 'summary'
        };
    }])
