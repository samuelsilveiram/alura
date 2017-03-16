angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus', function(){
        var ddo = {};

        ddo.restrict = 'A';

        // ddo.scope = {
        //     focado : '='
        //     //@ - valor passado é considerado texto
        //     //& - valor passado é executada uma expressão
        //     //= - valor passado é considerado uma propriedade com 2waydatabind
        // };

        ddo.link = function(scope, element){
            // existe outra fase, que é a de compile.
            // somente na fase de link pode ser colocado watcher
            //scope.$watch('focado', function(){
                // podemos fazer o mesmo comportamento com o eventBus
                // if(scope.focado)
                //     element[0].focus();
                //     focado = false;
            //});
            scope.$on('fotoCadastrada', function(){
                element[0].focus();
            });
        }

        return ddo;
    }).directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });    
            });
        };
        return ddo;
    });