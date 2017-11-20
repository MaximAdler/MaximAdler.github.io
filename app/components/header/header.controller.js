app.controller('HeaderController',['$scope', ($scope) => {

  $scope.menuRoute = function(elem) {
    if(elem == "companies") {
      angular.element(document.querySelector('companies')).removeClass('hide');
      angular.element(document.querySelector('mainpage')).addClass('hide');
      angular.element(document.querySelector('about')).addClass('hide');
      angular.element(document.querySelector('team')).addClass('hide');
      angular.element(document.querySelector('contacts')).addClass('hide');
    }
    else if( elem == 'mainpage') {
      angular.element(document.querySelector('companies')).addClass('hide');
      angular.element(document.querySelector('mainpage')).removeClass('hide');
      angular.element(document.querySelector('about')).addClass('hide');
      angular.element(document.querySelector('team')).addClass('hide');
      angular.element(document.querySelector('contacts')).addClass('hide');
    } else if( elem == 'about') {
      angular.element(document.querySelector('companies')).addClass('hide');
      angular.element(document.querySelector('mainpage')).addClass('hide');
      angular.element(document.querySelector('about')).removeClass('hide');
      angular.element(document.querySelector('team')).addClass('hide');
      angular.element(document.querySelector('contacts')).addClass('hide');
    } else if( elem == 'team') {
      angular.element(document.querySelector('companies')).addClass('hide');
      angular.element(document.querySelector('mainpage')).addClass('hide');
      angular.element(document.querySelector('about')).addClass('hide');
      angular.element(document.querySelector('team')).removeClass('hide');
      angular.element(document.querySelector('contacts')).addClass('hide');
    } else if( elem == 'contacts') {
      angular.element(document.querySelector('companies')).addClass('hide');
      angular.element(document.querySelector('mainpage')).addClass('hide');
      angular.element(document.querySelector('about')).addClass('hide');
      angular.element(document.querySelector('team')).addClass('hide');
      angular.element(document.querySelector('contacts')).removeClass('hide');
    }
  }
}])
