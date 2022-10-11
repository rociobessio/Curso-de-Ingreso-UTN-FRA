/*
09 bis 
lo mismo que lo anterior mas 
pedir el % por prompt

*/
function mostrarAumento()
{
							//PROBLEMA MATEMATICO Y PORCENTAJES:

		//DECLARACION DE VARIABLES
		let importe,resultado,importeNuevo,porcentaje;

		//PEDIR INFO MEDIANTE ID Y PASARLA A ENTEROS
		importe=document.getElementById('txtIdSueldo').value;
		porcentaje=prompt("Ingrese el porcentaje del aumento: ");

		importe=parseInt(importe);
		porcentaje=parseInt(porcentaje);		

		//OPERACION MATEMATICA
		importeNuevo=((importe*porcentaje)/100);
		resultado=importe+importeNuevo;

		//IMPRIMIR EL RESULTADO EN PANTALLA:
		document.getElementById('txtIdResultado').value=resultado;
}