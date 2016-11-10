var LunTest = angular.module('LunTest');

LunTest.controller('InfoController', ['$scope', '$rootScope', '$state', 'UserService', function($scope, $rootScope, $state, UserService) {

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
            var haveEmailName = $scope.user.name && $scope.user.email;
            var maxFinished = $rootScope.finishedSteps.sort(function(a, b) {
                return b - a;
            })[0];
            var biggestStep = ctrl.currentStateNumber > maxFinished ? ctrl.currentStateNumber : maxFinished;
            var isAvaliabledForNextStep = biggestStep + 1 == step && haveEmailName;
            return !(isFinished || isAvaliabledForNextStep || step === ctrl.currentStateNumber);
        };

        ctrl.goToStep = function(step) {
            if (step > ctrl.currentStateNumber) {
                var user = angular.copy($scope.user);
                if (!user.email || !user.name) {
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
