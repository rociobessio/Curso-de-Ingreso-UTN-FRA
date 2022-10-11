/*
10 bis 
lo mismo que lo anterior mas 
pedir el % por prompt
*/

function mostrarAumento()
{
					//DESCUENTO MEDIANTE PROMPT

	//VARIABLES
	let importe,porcentaje,resultado,descuento;

	//CARGAMOS LAS VARIABLES
	importe=document.getElementById('txtIdImporte').value;
	descuento=prompt("Ingresa el porcentaje del descuento: ");

	//PASAMOS LA DATA A ENTEROS
	importe=parseInt(importe);	
	descuento=parseInt(descuento)

	//OPERACION:
	porcentaje=((importe*descuento)/100);
	resultado=importe-porcentaje;

	//IMPRIMIMOS EN PANTALLA:
	document.getElementById('txtIdResultado').value=resultado;
}