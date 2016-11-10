var LunTest = angular.module('LunTest');

LunTest.controller('AppController', ['$scope', '$state', '$rootScope', 'localStorageService', function($scope, $state, $rootScope, localStorageService) {

    var stateChangeStartWatcher = $rootScope.$on('$stateChangeStart', function (event, next) {
        $rootScope.currentState = next.data;
        $rootScope.finishedSteps = $rootScope.finishedSteps || localStorageService.get('finishedSteps');
        var stepId = $rootScope.currentState.state;
        var maxFinished = $rootScope.finishedSteps.sort(function (a, b) {
            return b - a;
        })[0];
        var nextStepShouldBe = maxFinished + 1;
        if (nextStepShouldBe === stepId) {
            localStorageService.set('finishedSteps', $rootScope.finishedSteps);
        } else if (stepId < nextStepShouldBe) {
        } else if (nextStepShouldBe < stepId) {
            event.preventDefault();
            $state.go($rootScope.steps[nextStepShouldBe]);
        }
    });

    $rootScope.$on('$destroy', stateChangeStartWatcher);

}
]);
