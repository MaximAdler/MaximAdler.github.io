angular.module('app',[])
        .component('parheader', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/header/header.html'
        })
        .component('companies', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/companies/companies.html'
        })
        .component('parfooter', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/footer/footer.html'
        })
        .component('mainpage', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/main/mainpage.html'
        })
        .component('about', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/about/about.html'
        })
        .component('team', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/team/team.html'
        })
        .component('contacts', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/contacts/contacts.html'
        })
