angular.module('alurapic')           
	.controller('FotoController', 
	
		['$scope',
		'cadastroDeFotos',
		'recursoFoto',
		'$routeParams', 
		
		
		function($scope, cadastroDeFotos, recursoFoto, $routeParams) {

		$scope.foto = {};
		$scope.mensagem = '';

		if($routeParams.fotoId) {
			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
				$scope.foto = foto; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {

				cadastroDeFotos.cadastrar($scope.foto)
				.then(function(dados){
					$scope.mensagem = dados.mensagem;
					if(dados.inclusao) $scope.foto = {};
					//$scope.focado = true;
				})
				.catch(function(){
					$scope.mensagem = dados.mensagem;
				});
			}
		};
	}]);