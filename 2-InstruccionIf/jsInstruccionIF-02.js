/*
BESSIO ROCIO 
IF 02

Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted tiene: "+edadIngresada+" y es mayor de edad.");
	}

}//FIN DE LA FUNCIÓN