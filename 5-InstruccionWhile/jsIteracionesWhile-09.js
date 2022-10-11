/*

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero"; //Se utiliza pocas veces
	numeroMinimo=0;
	numeroMaximo=0;
	respuesta='si';

	while(respuesta=="si")//mientras que respuesta sea igual a "si":
	{
		numeroIngresado=prompt("Ingresa el numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(banderaDelPrimero=="es el primero") //por aca pasa el primer numero
		{
			banderaDelPrimero="YA NO es el primero.";//por aca ya se cambia la condicion y no es mas es el primero
			numeroMaximo=numeroIngresado; //aca se acumulan los numeros
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)//si numeroIngresado es mayor que numero maximo(ya ingresado o inicializado) entra:
			{
				numeroMaximo=numeroIngresado;//se guarda
			}
			if(numeroIngresado<numeroMinimo)//si numeroIngresado es menor que numero maximo(ya ingresado o inicializado) entra:
			{
				numeroMinimo=numeroIngresado;//se guarda.
			}
		}


		respuesta=prompt("desea continuar?"); //seguira preguntando
	}

	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN