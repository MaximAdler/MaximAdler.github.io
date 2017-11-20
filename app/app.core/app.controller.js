let app = angular.module('app');

app.controller('AppController',['$scope', '$location', ($scope, $location) => {
  if($location.$$hash == "companies") {
    angular.element(document.querySelector('companies')).removeClass('hide');
    angular.element(document.querySelector('mainpage')).addClass('hide');
    angular.element(document.querySelector('about')).addClass('hide');
    angular.element(document.querySelector('team')).addClass('hide');
    angular.element(document.querySelector('contacts')).addClass('hide');
  }
  else if( $location.$$hash == 'mainpage') {
    angular.element(document.querySelector('companies')).addClass('hide');
    angular.element(document.querySelector('mainpage')).removeClass('hide');
    angular.element(document.querySelector('about')).addClass('hide');
    angular.element(document.querySelector('team')).addClass('hide');
    angular.element(document.querySelector('contacts')).addClass('hide');
  } else if( $location.$$hash == 'about') {
    angular.element(document.querySelector('companies')).addClass('hide');
    angular.element(document.querySelector('mainpage')).addClass('hide');
    angular.element(document.querySelector('about')).removeClass('hide');
    angular.element(document.querySelector('team')).addClass('hide');
    angular.element(document.querySelector('contacts')).addClass('hide');
  } else if( $location.$$hash == 'team') {
    angular.element(document.querySelector('companies')).addClass('hide');
    angular.element(document.querySelector('mainpage')).addClass('hide');
    angular.element(document.querySelector('about')).addClass('hide');
    angular.element(document.querySelector('team')).removeClass('hide');
    angular.element(document.querySelector('contacts')).addClass('hide');
  } else if( $location.$$hash == 'contacts') {
    angular.element(document.querySelector('companies')).addClass('hide');
    angular.element(document.querySelector('mainpage')).addClass('hide');
    angular.element(document.querySelector('about')).addClass('hide');
    angular.element(document.querySelector('team')).addClass('hide');
    angular.element(document.querySelector('contacts')).removeClass('hide');
  }
}])
