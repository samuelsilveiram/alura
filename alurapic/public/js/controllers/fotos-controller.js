angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.grupos = [{id: 1, nome:"teste"}];

    var promise = $http.get('v1/fotos');
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });

    $scope.remover = function(foto){
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            var indexFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indexFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
        }).error(function(error){
            mensagem = 'Não foi possível remover a foto' + error;
        });
    }


});