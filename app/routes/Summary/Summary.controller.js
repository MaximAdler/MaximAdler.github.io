var LunTest = angular.module('LunTest');

LunTest.controller('SummaryController', ['$scope', '$state', '$rootScope', 'UserService', 'localStorageService', function($scope, $state, $rootScope, UserService, localStorageService) {

    var ctrl = this;
    $scope.user = UserService.getUser();
    ctrl.convertSocialNetworkKey = function(key) {
        var network = 0;
        switch (key) {
            case 'fb':
                network = 'Facebook';
                break;
            case 'vk':
                network = 'Вконтакте';
                break;
            case 'tw':
                network = 'Twitter';
                break;
            case 'ok':
                network = 'Одноклассники';
                break;
        }
        return network + ':';
    };
    ctrl.restartQuiz = function() {
        localStorageService.set('finishedSteps', []);
        $rootScope.finishedSteps = [0];
        UserService.removeUser();
        $state.go('basic');
    };
}]);
