app.controller('ContactsController',['$scope', ($scope) => {
  $scope.name = '';
  $scope.email = '';
  $scope.message = '';
  $scope.sendMessage = function() {
    $scope.name == '' || typeof($scope.name) == 'undefined' ?
          angular.element(document.querySelector('.name-contact')).removeClass('hide') :
          angular.element(document.querySelector('.name-contact')).addClass('hide')
    $scope.email == '' || typeof($scope.email) == 'undefined' ?
          angular.element(document.querySelector('.email-contact')).removeClass('hide') :
          angular.element(document.querySelector('.email-contact')).addClass('hide')
    $scope.message == '' || typeof($scope.message) == 'undefined' ?
          angular.element(document.querySelector('.message-contact')).removeClass('hide') :
          angular.element(document.querySelector('.message-contact')).addClass('hide')
    if($scope.name == '' || typeof($scope.name) == 'undefined' || $scope.email == '' || typeof($scope.email) == 'undefined' || $scope.message == '' || typeof($scope.message) == 'undefined') {
        return false
      } else {
        angular.element(document.querySelector('#success')).removeClass('hide');
        $scope.name = '';
        $scope.email = '';
        $scope.message = '';
      }
  }
}])
