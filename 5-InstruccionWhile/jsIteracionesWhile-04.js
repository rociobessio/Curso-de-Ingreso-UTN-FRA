/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9: ");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado>9 || numeroIngresado<0)//Mientras que numeroIngresado sea mayor a 9 O numeroIngresado sea menor a 0
	{
		numeroIngresado=prompt("ERROR DE VALIDACION, ingresa de nuevo: ");//No ingresara y pedira validacion
	}
	document.getElementById('txtIdNumero').value=numeroIngresado;//Si lo consigue sale e imprime en pantalla
	
}//FIN DE LA FUNCIÓN