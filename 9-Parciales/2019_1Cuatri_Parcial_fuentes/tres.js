/*BESSIO ROCIO

Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por idPedir por prompt el precio
 y el porcentaje de descuento, mostrar el precio final con descuento por id
 */
function mostrar()
{
	//VARIABLES
	let precioInicial;
	let precioFinal;
	let descuento;
	let resultado;

	//INGRESO DE DATOS Y PARSEO
	precioInicial=prompt("Por favor, ingresa el precio: ");
	precioInicial=parseInt(precioInicial);

	descuento=prompt("Ahora ingresa el descuento: ");
	descuento=parseInt(descuento);

	//CALCULOS
	precioFinal=((precioInicial*descuento)/100);
	resultado=(precioInicial-precioFinal);	

	//IMPRIMIR EN PANTALLA POR ID
	document.getElementById('elPrecioFinal').value=resultado;

}
