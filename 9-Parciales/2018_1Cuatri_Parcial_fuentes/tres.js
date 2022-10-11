//Bessio Rocio
function mostrar()
{
	//VARIABLES
	let precioUno,precioFinal,descuento,resultado;

	//DATOS INGRESADOS POR PROMPT
	precioUno=prompt("Ingresa el precio: ");
	descuento=prompt("Ingresa el descuento: ");

	//PARSEAMOS LOS DATOS
	precioUno=parseInt(precioUno);
	descuento=parseInt(descuento);

	//CALCULAMOS
	precioFinal=((precioUno*descuento)/100);	
	resultado=(precioUno-precioFinal);

	//IMPRIMIMOS EN PANTALLA MEDIANTE ID
	document.getElementById('elPrecioFinal').value=resultado;


}
