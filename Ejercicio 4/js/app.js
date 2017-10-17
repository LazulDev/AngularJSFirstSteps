var app = angular.module('universidadApp',[]);

app.controller('profesorCtrl', function(){
	
	this.profesor = profesorData; // Creamos la propiedad profesor dentro del controlador con la propiedades de ProfesorData

});

var profesorData = {
	nombre: "María Sánchez",
	bio: "Esto es angularJS",
	edad: 23,
	foto: "img/Logo-Everis.jpg"

}