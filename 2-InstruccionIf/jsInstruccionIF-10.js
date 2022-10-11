/*
BESSIO ROCIO
IF 10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let numeroAleatorio;

	numeroAleatorio= Math.floor(Math.random()*10)+1;

	if(numeroAleatorio==9 || numeroAleatorio==10)
	{
		alert("EXELENTE");
	}
	else
	{
		if(numeroAleatorio<4)
		{
			alert("APROBO");
		}
		else
		{
			alert("Vamos, la proxima se puede.");
		}
	}

}//FIN DE LA FUNCIÓN