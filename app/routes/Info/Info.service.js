var LunTest = angular.module('LunTest');

LunTest.factory('UserService', ['$rootScope', 'localStorageService', function($rootScope, localStorageService) {
    return {
        setUserValue: function setUserValue(key, value) {
            $rootScope.user[key] = value;
        },

        saveUser: function saveUser(user) {
            if (user) {
                angular.merge($rootScope.user, user);
                localStorageService.set('user', $rootScope.user);
            }
        },

        getUser: function getUser() {
            return $rootScope.user;
        },

        removeUser: function removeUser() {
            $rootScope.user = {};
            localStorageService.set('user', {});
        }
    };
}])
