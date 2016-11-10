var LunTest = angular.module('LunTest');

LunTest.controller('SocialController', ['$scope', '$rootScope', 'UserService', '$state', function($scope, $rootScope, UserService, $state) {

    var ctrl = this;
    ctrl.currentState = $state.current;
    ctrl.currentStateNumber = ctrl.currentState.data.state;
    $scope.user = UserService.getUser();
    var regexp = {
        tw: 'twitter.com',
        vk: 'vk.com',
        fb: 'fb.com',
        ok: 'ok.ru'
    };

    ctrl.getRegexUrl = function(forNetwork) {
        return 'http://' + regexp[forNetwork] + '/';
    };

    ctrl.isMatchRegexp = function(forSite) {
        return forSite.match(regexp[forSite]) !== null;
    };

    ctrl.addHttpToUrl = function(forNetwork) {
        var pattern = ctrl.getRegexUrl(forNetwork);
        if (!$scope.user.contacts[forNetwork] || $scope.user.contacts[forNetwork].indexOf(pattern) === -1) {
            $scope.user.contacts[forNetwork] = pattern;
        }
    };

    if (!$scope.user.contacts) {
        $scope.user.contacts = {
            tw: null,
            vk: null,
            fb: null,
            ok: null
        };
    } else {
        for (var key in $scope.user.contacts) {
            var contact = $scope.user.contacts[key];
            var upperCaseKey = key.toUpperCase();
            if (contact === ctrl.getRegexUrl(key) || !contact) {
                $scope["userHave" + upperCaseKey] = false;
                $scope.user.contacts[key] = null;
            } else {
                $scope["userHave" + upperCaseKey] = true;
            }
        }
    }

    $scope.$watch('user.contacts', function(newValue) {
        if (newValue) {
            var copy = angular.copy(newValue);
            for (var _key in newValue) {
                var regexUrl = ctrl.getRegexUrl(_key);
                if (copy[_key] && !copy[_key].match(regexUrl)) {
                    newValue[_key] = regexUrl;
                }
                if (!copy[_key] || copy[_key] === regexUrl) {
                    delete copy[_key];
                }
            }
            $scope.haveSocialNetworks = !angular.equals({}, copy);
        }
    }, true);

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
        var isAvaliabledForNextStep = biggestStep + 1 === step && $scope.haveSocialNetworks;
        return !(isFinished || isAvaliabledForNextStep || step == ctrl.currentStateNumber);
    };

    ctrl.goToStep = function(step) {
        if (ctrl.currentStateNumber < step) {
            var user = angular.copy($scope.user.contacts);
            for (var _key2 in user) {
                if (!user[_key2] || !$scope['userHave' + _key2.toUpperCase()] || user[_key2] === ctrl.getRegexUrl(_key2)) {
                    user[_key2] = null;
                }
            }
            if (!ctrl.isStepFinished(ctrl.currentStateNumber)) {
                $rootScope.finishedSteps.push(ctrl.currentStateNumber);
            }
            UserService.saveUser(user);
        }
        $state.go($rootScope.steps[step]);
    };
}]);
