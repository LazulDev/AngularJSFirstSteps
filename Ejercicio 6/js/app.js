var app = angular.module('universidadApp',[]);

app.controller('profesorCtrl', function($scope){
	
	$scope.profesor = profesorData; // Creamos la propiedad profesor dentro del controlador con la propiedades de ProfesorData
	$scope.editando = {}; 			// 	Copia del profesor cuando se presione el boton que se usa para los campos de texto de abajo
	
	$scope.mostrarCaja = false;
	$scope.EditarProfesor = function(){
		angular.copy( $scope.profesor, $scope.editando);
		$scope.mostrarCaja = true;
	}
	$scope.GuardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor);
		$scope.mostrarCaja = false;
	}
	$scope.CancelarCambios = function(){
		$scope.editando = {};
		$scope.mostrarCaja = false;
	}

});

var profesorData = {
	nombre: "María Sánchez",
	bio: "Esto es angularJS",
	edad: 23,
	foto: "img/Logo-Everis.jpg"

}