//Bessio Rocio

function mostrar()
{
	//VARIABLES
	let nombreIngresado,localidadIngresada;

	//INGRESO DE DATOS MEDIANTE ID
	nombreIngresado=document.getElementById('elNombre').value;
	localidadIngresada=document.getElementById('laLocalidad').value;  

	//IMPRIMIR EN PANTALLA
	alert("Usted es "+nombreIngresado+" y vive en la localidad de "+localidadIngresada);
}
