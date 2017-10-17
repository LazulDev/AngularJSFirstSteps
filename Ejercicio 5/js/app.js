var app = angular.module('universidadApp',[]);

app.controller('profesorCtrl', function($scope){
	
	$scope.profesor = profesorData; // Creamos la propiedad profesor dentro del controlador con la propiedades de ProfesorData
	$scope.editando = {}; 			// 	Copia del profesor cuando se presione el boton que se usa para los campos de texto de abajo
	
	$scope.EditarProfesor = function(){
		angular.copy( $scope.profesor, $scope.editando);
	}
	$scope.GuardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor);
	}
	$scope.CancelarCambios = function(){
		$scope.editando = {};
	}

});

var profesorData = {
	nombre: "María Sánchez",
	bio: "Esto es angularJS",
	edad: 23,
	foto: "img/Logo-Everis.jpg"

}