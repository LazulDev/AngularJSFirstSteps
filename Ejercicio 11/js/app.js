(function(){ // Encapsulado: buena praxis para evitar que el contenido pueda ser editado desde el exterior

var app = angular.module('universidadApp',[]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		
		$scope.personas =[
			{
				"id": 0,
				"sexo": "hombre",
				"nombre": "Kari Carr",
				"avatar": "kari.jpg",
				"celular": "(826) 453-3497"
			},
			{
				"id": 1,
				"sexo": "mujer",
				"nombre": "Tameka Gmable",
				"avatar": "tameka.jpg",
				"celular": "(824) 438-2499"
			},
			{
				"id": 2,
				"sexo": "mujer",
				"nombre": "Carity Austin",
				"avatar": "charity.jpg",
				"celular": "(817) 512-2258"
			}]
	

}]);

})();