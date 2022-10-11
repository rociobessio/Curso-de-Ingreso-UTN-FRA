/*
BESSIO ROCIO
IF 05

Al ingresar una edad solo debemos informar si la persona NO es adolescente
*/

function mostrar()
{

	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("Usted NO es adolescente.");

	}
/*
		OTRA FORMA DE HACERLO: FUE LA DE LA CLASE
	
	if(edadIngresada>13)
	{
		alert("Su edad es: "+edadIngresada" y NO es un adolescente");
	}
	if(edadIngresada<17) //menor que 13 y mayor que
	{
			alert("Su edad es:"+edadIngresada+" y NO es un adolescente.");
	}



*/
}//FIN DE LA FUNCIÓN