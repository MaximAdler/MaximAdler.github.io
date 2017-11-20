app.controller('CompaniesController',['$scope', '$http', '$log', '$window', ($scope, $http, $log, $window) => {

    $scope.filterName = '';
    $scope.filterProducts = '';
    $scope.productsShow = false;
    $scope.editCompanyName = false;
    $scope.uniq_company_name = false;
    $scope.uniq_edited_company_name = false;
    $scope.edited_company = [];
    $scope.edited_product = [];


    $http.get('/data/companies.json')
         .then((resp)=>{
           $scope.companies = resp.data.filter((v)=>v.companyName != '' && v.companyName != null)
         })
     $scope.showProducts = (company) => {
       $scope.products = $scope.companies.filter((v)=>v.companyName == company)[0];
       $scope.productsShow = true;
     }

}])
