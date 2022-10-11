/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	let acumulador;
	let contador;
	let acumulador;
	let promedio:
	let numeroIngresado;

	contador=0; //Inicializo
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingresa el numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}

	document.getElementById('txtIdSuma').value=contador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN