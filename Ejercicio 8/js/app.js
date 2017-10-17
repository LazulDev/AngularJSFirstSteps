(function(){ // Encapsulado: buena praxis para evitar que el contenido pueda ser editado desde el exterior

var app = angular.module('universidadApp',[]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Fernando Herrera", "Elisa Flores", "Juan Carlos Pineda"];
	
		$scope.listadoProfesores ={
			profesores : [{
				nombre: "Fernando Herrera",
				edad: 29,
				clase: "PEE"
			},
			{
				nombre: "Elisa Flores",
				edad: 29,
				clase: "PEE"
			},
			{

				nombre: "Juan Carlos Pineda",
				edad: 29,
				clase: "PEE"
			}]
		}

}]);

})();