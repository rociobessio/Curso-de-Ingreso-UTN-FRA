/*
BESSIO ROCIO
IF 09

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{

	let numeroAleatorio;

	numeroAleatorio= Math.floor(Math.random()*10)+1;	
					//FLOOR REDONDEA EL NUMERO
					//RANDOM TIRA UN NUMERO RANDOM
	alert("El numero random generado es: "+numeroAleatorio);

}//FIN DE LA FUNCIÓN