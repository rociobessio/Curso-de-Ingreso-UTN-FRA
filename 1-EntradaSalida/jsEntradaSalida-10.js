/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
							//DESCUENTO:

	//VARIABLES
	let importe,porcentaje,resultado;

	//CARGAMOS Y PASAMOS LOS DATOS A ENTEROS
	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	//OPERACION
	porcentaje=((importe*25)/100);
	resultado=importe-porcentaje;

	//IMPRIMIMOS EN PANTALLA:
	document.getElementById('txtIdResultado').value=resultado;
}
