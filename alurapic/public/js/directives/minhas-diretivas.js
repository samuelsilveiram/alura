angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    var ddo = {}; //DDO Directive Definition Object
    ddo.restric = "AE" //Atribute Element
    ddo.scope = {
        titulo: '@titulo' // Pode ser colocado somente o @
    };
    ddo.transclude = true;
    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;
}).directive('minhaFoto', function(){
    var ddo = {};
    ddo.restric = 'AE'
    ddo.scope = {
        url: '@',
        titulo: '@'
    };
    ddo.templateUrl = 'js/directives/minha-foto.html';
    return ddo;
});