angular.module('alurapic').controller('FotosController', function($scope, $http) {
/*
   $http.get('v1/fotos').success(function(fotos) {
       $scope.fotos = fotos;
   }).error(function(error){
       console.log(error);
});*/


   var promise = $http.get('v1/fotos');
   promise.then(function(retorno){
       $scope.fotos = retorno.data;
   }).catch(function(error){
       console.log(error);
   });


});