angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    
    $scope.foto = {};
    $scope.mensagem = '';

    var fotoId = $routeParams.fotoId;

    if(fotoId){
        $http.get('v1/fotos/'+fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(){
            $scope.mensagem = 'Ocorreu um erro ao recuperar a foto';
        });
    }
    

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            if($scope.foto._id){
                $http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.mensagem = 'Foto editada com sucesso';
                })
                .error(function(){
                    $scope.mensagem = 'Ocorreu um erro ao salvar a foto';
                });
            }else{
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                })
                .error(function(){
                    $scope.mensagem = 'Ocorreu um erro ao salvar a foto';
                });
            }
        }
    };
});