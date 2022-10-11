/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
					//UTILIZACION DE parseInt Y SACAR EL RESTO DE UNA OPERACION:

	//ALMACEN DE VARIABLES
	let numeroDivisor,numeroDividendo,resultado;

	//RECABAR INFO MEDIANTE ID
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;
	numeroDividendo=document.getElementById('txtIdNumeroDividendo').value;

	//CON parseInt PASAMOS A ENTEROS LOS NUMEROS QUE SE INGRESARON:
	numeroDivisor=parseInt(numeroDivisor);
	numeroDividendo=parseInt(numeroDividendo);

	//REALIZAMOS OPERACION MATEMATICA:
	resultado=numeroDividendo%numeroDivisor;

	//IMPRIMIMOS EN PANTALLA:
	alert("El resto es:"+resultado);

}
