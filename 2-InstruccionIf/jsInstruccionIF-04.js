/*
BESSIO ROCIO
IF 04

Al ingresar una edad debemos informar 
si la persona es adolescente, edad entre 13 y 17 años (inclusive)
*/


function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>13 && edadIngresada<17)
	{
		alert("Usted tiene: "+edadIngresada+" y es un adolescente.");
	}



}//FIN DE LA FUNCIÓN