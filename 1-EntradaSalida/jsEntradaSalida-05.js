/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
						//EJERCICIO DE CONCATENACION DE VARIABLES:

	//VARIABLES
	let nombreIngresado, edadIngresada;

	//INGRESO DE DATOS DEL USUARIO MEDIANTE ID:
	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	//IMPRIME EN PANTALLA Y CONCATENA:
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años.");

}

