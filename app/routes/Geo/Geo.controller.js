var LunTest = angular.module('LunTest');

LunTest.controller('GeoController', ['$scope', '$state', '$rootScope', 'EnumsService', 'UserService', '$timeout', function($scope, $state, $rootScope, EnumsService, UserService, $timeout) {

        var ctrl = this;
        ctrl.currentState = $state.current;
        ctrl.currentStateNumber = ctrl.currentState.data.state;
        $scope.user = UserService.getUser();

        ctrl.isStepFinished = function(step) {
            var isFinished = $rootScope.finishedSteps.indexOf(step) > -1;
            return isFinished;
        };

        ctrl.isDisabledStep = function(step) {
            var isFinished = ctrl.isStepFinished(step);
            var maxFinished = $rootScope.finishedSteps.sort(function(a, b) {
                return b - a;
            })[0];
            var biggestStep = ctrl.currentStateNumber > maxFinished ? ctrl.currentStateNumber : maxFinished;

            var haveCityNow = $scope.user.city && $scope.user.city.value;
            var haveCountryNow = $scope.user.country && $scope.user.country.value;

            var isAvaliabledForNextStep = biggestStep + 1 === step && haveCityNow && haveCountryNow;
            return !(isFinished || isAvaliabledForNextStep || step === ctrl.currentStateNumber);
        };

        EnumsService.getCities(function(result) {
            ctrl.cities = result.data;
            EnumsService.getCountries(function(result) {
                ctrl.countries = result.data;
                if (!$scope.user.country) {
                    $scope.user.country = {};
                    $scope.user.city = {};
                }
                if ($scope.user.city && $scope.user.city.name) {
                    $timeout(function() {
                        ctrl.selectCountry($scope.user.country.value);
                    });
                }
            });
        });

        ctrl.selectCountry = function() {
            var countryValue = $scope.user.country.value;
            $scope.user.country.name = ctrl.countries[countryValue];
            ctrl.avaliableCities = ctrl.getAvaliableCities(countryValue);
            if (!$scope.user.city || $scope.user.city.country != $scope.user.country.value) {
                $scope.user.city = ctrl.avaliableCities[0];
            }
        };

        ctrl.getAvaliableCities = function(countryValue) {
            var arr = [];
            for (var key in ctrl.cities) {
                var city = ctrl.cities[key];
                city.value = Number(key);
                if (city.country === Number(countryValue)) {
                    arr.push(city);
                }
            }
            return arr;
        };

        ctrl.goToStep = function(step) {
            if (ctrl.currentStateNumber < step) {
                var user = angular.copy($scope.user);
                if (!user.city || !user.city.value || !user.country || !user.country.value) {
                    return;
                }
                if (!ctrl.isStepFinished(ctrl.currentStateNumber)) {
                    $rootScope.finishedSteps.push(ctrl.currentStateNumber);
                }
                UserService.saveUser(user);
            }
            $state.go($rootScope.steps[step]);
        };
    }

]);
