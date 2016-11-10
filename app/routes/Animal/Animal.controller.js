var LunTest = angular.module('LunTest');

LunTest.controller('AnimalController', ['$scope', '$rootScope', 'UserService', '$state', '$location', function($scope, $rootScope, UserService, $state, $location) {

    var ctrl = this;
    ctrl.currentState = $state.current;
    ctrl.currentStateNumber = ctrl.currentState.data.state;
    $scope.user = UserService.getUser();
    $scope.user.animal = {
        type: null,
        url: null
    };
    $scope.haveNoAnimal = false;

    ctrl.isStepFinished = function(step) {
        var isFinished = $rootScope.finishedSteps.indexOf(step) > -1;
        return isFinished;
    };

    ctrl.isDisabledStep = function() {
        return false;
    };

    ctrl.animals = [{
        url: '/resources/images/cat1.jpg',
        type: 'cat'
    }, {
        url: '/resources/images/cat2.jpg',
        type: 'cat'
    }, {
        url: '/resources/images/cat3.jpg',
        type: 'cat'
    }, {
        url: '/resources/images/dog4.jpg',
        type: 'dog'
    }];

    ctrl.selectAnimal = function(animal) {
        $scope.haveNoAnimal = false;
        $scope.user.animal = animal;
    };

    ctrl.isSelected = function(animal) {
        return angular.equals($scope.user.animal, animal);
    };

    ctrl.isCat = function() {
        if ($scope.user.animal.type === 'cat' || !$scope.user.animal.type) {
            return true;
        }
        return false;
    };

    ctrl.goToStep = function(step) {
        var stepNow = ctrl.currentState.data.state;
        if (stepNow < step) {
            var user = angular.copy($scope.user);
            if (!user.animal.url || !ctrl.isCat()) {
                $scope.haveNoAnimal = true;
                return;
            }
            UserService.saveUser(user);
            $rootScope.finishedSteps.push(stepNow);
        }
        $state.go($rootScope.steps[step]);
    };
}]);
