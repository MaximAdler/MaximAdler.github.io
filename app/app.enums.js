var AppEnums = angular.module('AppEnums', [])
    .service('EnumsService', ['$rootScope', '$http', '$location', function($rootScope, $http, $location) {
        return {
            getCountries: function getCountries(success, error) {
                $http.get('/resources/data/countries.json').then(success, error);
            },

            getCities: function getCities(success, error) {
                $http.get('/resources/data/cities.json').then(success, error);
            }
        };
    }]);
