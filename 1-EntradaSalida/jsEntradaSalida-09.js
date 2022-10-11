/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	
							//PROBLEMA MATEMATICO Y PORCENTAJES:

		//DECLARACION DE VARIABLES
		let importe,resultado,porcentaje;

		//PEDIR INFO MEDIANTE ID Y PASARLA A ENTEROS
		importe=document.getElementById('txtIdSueldo').value;
		importe=parseInt(importe);		

		//OPERACION MATEMATICA
		porcentaje=((importe*10)/100);
		resultado=importe+porcentaje;

		//IMPRIMIR EL RESULTADO EN PANTALLA:
		document.getElementById('txtIdResultado').value=resultado;


}
